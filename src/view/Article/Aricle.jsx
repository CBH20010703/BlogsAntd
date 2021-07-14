import React, { Component } from 'react'

import ReactMarkdown from "react-markdown";
import { GetArticle } from "../../request/apiconfig"
import { Skeleton, Spin, PageHeader, Button } from 'antd';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
/* Use `…/dist/cjs/…` if you’re not in ESM! */
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { a11yLight } from "react-syntax-highlighter/dist/cjs/styles/hljs/a11y-light"
import "./Article.css"
import Leave from '../../component/Leave/Leave';
import ArticleDrawer from '../../component/ArticleDrawer/ArticleDrawer';
import { GetArticleLeaves } from "../../request/apiconfig"
export default class Aricle extends Component {
    constructor(props) {

        super(props)
        this.state = {
            markdown: "",
            loading: true,
            tab: 0,
            article: {},
            LeacveShow: true,
            visible: false,
            LeaveList: []
        }

        GetArticle(this.props.location.state.artricle_id).then((res) => {
            this.setState({
                markdown: res.article_codetext,
                loading: false,
                article: res
            })
        }).catch((e) => {

        })
        this.GetLeaves();
    }
    async GetLeaves() {
        GetArticleLeaves(this.props.location.state.artricle_id).then(res => {

            if (res.code == 200) {
                this.setState({
                    LeaveList: res.data
                })
            }
        })
    }
    showDrawer = () => {
        this.GetLeaves();
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    render() {
        let { tab } = this.state;
        const menu = (
            <Menu>
                <Menu.Item key="0">
                    <div onClick={() => { this.setState({ tab: 0 }) }} >
                        黑暗模式
                    </div>
                </Menu.Item>
                <Menu.Item key="1">
                    <div onClick={() => { this.setState({ tab: 1 }) }}>
                        护眼模式
                    </div>
                </Menu.Item>

            </Menu>
        );
        const component = {

            code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')

                return !inline && match ? (
                    <SyntaxHighlighter style={tab === 0 ? a11yDark : a11yLight} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
                ) : (
                    <code className={className} {...props}>
                        {children}
                    </code>
                )
            }
        }
        let { loading, LeacveShow } = this.state;
        return (
            <div style={{ padding: "15px", background: "#fff" }}>
                <ArticleDrawer LeaveList={this.state.LeaveList} visible={this.state.visible} onClose={this.onClose} articileid={this.state.article.artricle_id} />
                <Spin spinning={loading}>
                    <Skeleton active loading={loading}>
                        <PageHeader
                            className="site-page-header"
                            onBack={() => window.history.back()}
                            title={this.state.article.article_title}
                            subTitle={"创建时间 ： " + this.state.article.article_createtime}
                            extra={[

                                <Button onClick={() => { this.setState({ LeacveShow: !LeacveShow }) }} key="1" type="primary">
                                    {LeacveShow ? '评论' : '关闭窗口'}
                                </Button>,
                                <Dropdown key="2" overlay={menu}>
                                    <span className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                        模式切换<DownOutlined />
                                    </span>
                                </Dropdown>,
                                <Button onClick={this.showDrawer} key="0" type="primary">
                                    查看评论
                                </Button>
                            ]}
                        />
                        <div style={{ height: LeacveShow ? "0" : "auto", transition: "1s ease", overflow: "hidden" }}>
                            <Leave articileid={this.state.article.artricle_id} />
                        </div>
                        <div style={{ padding: "20px 10px" }}>
                            <ReactMarkdown
                                children={this.state.markdown.toString()}

                                components={component}
                            />
                        </div>
                    </Skeleton>
                </Spin>
            </div>

        )
    }
}
