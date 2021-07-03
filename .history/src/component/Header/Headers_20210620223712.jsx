import React, { Component } from 'react'
import { Layout } from 'antd';
const { Header } = Layout;
export default class Headers extends Component {
    render() {
        return (
            <div>
                <Header className="site-layout-background" style={{ padding: 0 }} > 头部</Header>
            </div>
        )
    }
}
