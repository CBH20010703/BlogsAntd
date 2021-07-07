import React, { Component } from 'react'
import { Result, Button } from 'antd';
export default class Phone extends Component {
    render() {
        return (
            <div>
                <Result
                    title="请在电脑端打开此网页Soory 移动端正在适配中"
                    extra={
                        <Button type="primary" key="console">

                        </Button>
                    }
                />
            </div>
        )
    }
}
