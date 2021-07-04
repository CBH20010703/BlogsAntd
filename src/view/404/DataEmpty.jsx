import React, { Component } from 'react'
import { Empty } from 'antd';
export default class DataEmpty extends Component {
    render() {
        return (
            <div>
                <Empty description="暂无数据哦" />

            </div>
        )
    }
}
