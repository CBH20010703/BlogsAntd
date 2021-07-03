import React, { Component } from "react";
import { Result, Button } from "antd";
export default class Error extends Component {
    render() {
        return (
            <div>
                <Result
                    status="404"
                    title="404"
                    subTitle="Soory 找不到你想要的页面"
                    extra={<Button type="primary">Back Home</Button>}
                />

            </div>
        );
    }
}
