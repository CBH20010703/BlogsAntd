import React, { Component } from 'react'
import { Result, Button } from 'antd';
export default class ServerError extends Component {
    render() {
        return (
            <div>
                <Result
                    status="500"
                    title="500"
                    subTitle="服务器内部错误"
                    extra={<Button type="primary"><a href="/">Back Home</a></Button>}
                />
            </div>
        )
    }
}
