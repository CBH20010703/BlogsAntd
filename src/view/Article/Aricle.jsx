import React, { Component } from 'react'
import MarkdownPreview from '@uiw/react-markdown-preview';
import { GetArticle } from "../../request/apiconfig"
import { Skeleton, Spin } from 'antd';
export default class Aricle extends Component {
    constructor(props) {

        super(props)
        this.state = {
            markdown: "",
            loading: true
        }

    }
    componentDidMount() {
        GetArticle(this.props.location.state.artricle_id).then((res) => {
            this.setState({
                markdown: res.article_codetext,
                loading: false
            })
        }).catch((e) => {

        })
    }

    render() {
        let { loading } = this.state;
        return (
            <div>

                <Spin spinning={loading}>
                    <Skeleton active loading={loading}>
                        <MarkdownPreview source={this.state.markdown} />
                    </Skeleton>
                </Spin>
            </div>

        )
    }
}
