import React, { Component } from 'react'

import ReactMarkdown from "react-markdown";
import { GetArticle } from "../../request/apiconfig"
import { Skeleton, Spin } from 'antd';
import CodeBlock from "./../../assets/CodeBlock";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
/* Use `…/dist/cjs/…` if you’re not in ESM! */
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { a11yLight } from "react-syntax-highlighter/dist/cjs/styles/hljs/a11y-light"


export default class Aricle extends Component {
    constructor(props) {

        super(props)
        this.state = {
            markdown: "",
            loading: true,
            tab: 0
        }
        GetArticle(this.props.location.state.artricle_id).then((res) => {
            this.setState({
                markdown: res.article_codetext,
                loading: false
            })
        }).catch((e) => {

        })
    }

    render() {
        let { tab } = this.state;
        const menu = (
            <Menu>
                <Menu.Item key="0">
                    <a target="_blank" rel="noopener noreferrer" onClick={() => { this.setState({ tab: 0 }) }} >
                        黑暗模式
                    </a>
                </Menu.Item>
                <Menu.Item key="1">
                    <a target="_blank" rel="noopener noreferrer" onClick={() => { this.setState({ tab: 1 }) }}>
                        护眼模式
                    </a>
                </Menu.Item>

            </Menu>
        );
        const component = {

            code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')

                return !inline && match ? (
                    <SyntaxHighlighter style={tab == 0 ? a11yDark : a11yLight} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
                ) : (
                    <code className={className} {...props}>
                        {children}
                    </code>
                )
            }
        }
        let { loading } = this.state;
        return (
            <div>
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        模式切换<DownOutlined />
                    </a>
                </Dropdown>
                <Spin spinning={loading}>
                    <Skeleton active loading={loading}>
                        {/* <MarkdownPreview renderers={{
                            code: CodeBlock,

                        }} source={this.state.markdown} /> */}
                        <ReactMarkdown
                            children={this.state.markdown.toString()}

                            components={component}
                        />
                    </Skeleton>
                </Spin>
            </div>

        )
    }
}
