import React, { Component } from 'react'
import "./Leave.css"
import { Form, Button, Input, message } from 'antd';
import { AddLeave } from '../../request/apiconfig';
const { TextArea } = Input;

export default class Leave extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }

    }
    onChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    onSubmit = () => {
        if (this.state.value !== "") {
            AddLeave({
                leave_text: this.state.value,
                article_id: this.props.articileid
            }).then((res) => {
                if (res.code == 200) {
                    message.success("添加评论成功");
                }
            }).catch((error) => {
                message.warning("留言失败~~")
            })
        } else {
            message.error("留言内容不能为空")
        }

    }
    render() {
        let { value } = this.state;
        let { onChange, onSubmit } = this;

        return (
            <div>
                <Form.Item key="1">
                    <TextArea rows={4} onChange={onChange} value={value} />
                </Form.Item>
                <Form.Item key="2">
                    <Button htmlType="submit" onClick={onSubmit} type="primary">
                        添加评论
                    </Button>
                </Form.Item>
            </div>
        )
    }
}
