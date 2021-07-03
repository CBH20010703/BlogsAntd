import React, { Component } from 'react'
import MarkdownPreview from '@uiw/react-markdown-preview';
import { GetArticle } from "../../request/apiconfig"
export default class Aricle extends Component {
    constructor(props) {

        super(props)
        this.state = {
            markdown: "",
        }

    }
    componentDidMount() {
        GetArticle(this.props.location.state.artricle_id).then((res) => {
            this.setState({
                markdown: res.article_codetext
            })
        })
    }

    render() {
        return (
            <div>

                <MarkdownPreview source={this.state.markdown} />

            </div>

        )
    }
}
