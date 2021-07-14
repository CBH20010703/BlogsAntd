import React, { Component } from 'react'
import "./Login.css"
import { Form, Input, Button, Col, Row, message } from 'antd';
import imgbg from "./../../assets/LoginBg.png"
import { UserLogin } from '../../request/apiconfig';
export default class Login extends Component {

    componentDidMount() {

    }
    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    }
    onFinish = (values) => {
        UserLogin(values).then((res) => {
            if (res.code === 200) {
                localStorage.setItem("token", res.token)
                message.success('登录成功');
                setTimeout(() => {
                    window.location = "/"
                }, 1000)
            } else {
                message.error("账号或者密码错误")
            }
        })

    }
    render() {
        let { onFinish, onFinishFailed } = this;
        return (
            <div className="LoginBg">
                <Row style={{ background: "#fff" }}>
                    <Col span={10}>
                        <img src={imgbg} width="100%" alt="" />
                    </Col>
                    <Col span={2}>

                    </Col>
                    <Col span={12}>
                        <div style={{ width: "100%", margin: "15% auto" }}>
                            <Form
                                name="basic"
                                labelCol={{ span: 0 }}
                                wrapperCol={{ span: 16 }}
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}

                            >
                                <Form.Item
                                    label="账号"
                                    name="user_username"
                                    rules={[{ required: true, message: '请输入账号' }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item

                                    label="密码"
                                    name="user_password"
                                    rules={[{ required: true, message: '请输入密码' }]}
                                >
                                    <Input.Password />
                                </Form.Item>
                                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                    <Button type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                </Form.Item>

                            </Form>
                        </div>
                    </Col>
                </Row>


            </div>
        )
    }
}
