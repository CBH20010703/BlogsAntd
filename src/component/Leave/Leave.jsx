import React, { Component } from 'react'
import "./Leave.css"
import { Form, Button, Input, message } from 'antd';
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
        message.warning('功能博主正在开发中~~~暂未开放');
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
