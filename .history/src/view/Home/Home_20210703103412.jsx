import React, { Component } from 'react'
import "./Home.css"
import { Descriptions } from 'antd';
import QueueAnim from 'rc-queue-anim';
import { UserOutlined, QqOutlined, EnvironmentOutlined, GithubOutlined, ConsoleSqlOutlined, AliyunOutlined, GlobalOutlined, Html5Outlined, AntDesignOutlined } from '@ant-design/icons';
export default class Home extends Component {

    handleClick = e => {
        console.log('click ', e);
    };
    render() {
        return (

            <div style={{ padding: "20px" }}>
                <QueueAnim delay={300} className="queue-simple">
                    <Descriptions title="About Me">

                        <Descriptions.Item label={<UserOutlined />}>C</Descriptions.Item>
                        <Descriptions.Item label={<QqOutlined />}>47790293</Descriptions.Item>
                        <Descriptions.Item label={<EnvironmentOutlined />}>河南 信阳</Descriptions.Item>
                        <Descriptions.Item label={<GithubOutlined />}><a href="https://github.com/CBH20010703"  >Git地址</a></Descriptions.Item>
                        <Descriptions.Item label={<GlobalOutlined />} span={2}>
                            <a href="http://www.cenbohao.com/">个人博客 Vue版</a>
                        </Descriptions.Item>
                    </Descriptions>

                    <Descriptions title="Blog Technology Selection">

                        <Descriptions.Item key="a" contentStyle={{ fontSize: "1rem" }} column={4} span={3} label="前端"><Html5Outlined /> React</Descriptions.Item>
                        <Descriptions.Item key="b" contentStyle={{ fontSize: "1rem" }} span={3} label="前端库"><AntDesignOutlined /> Antd</Descriptions.Item>
                        <Descriptions.Item key="c" contentStyle={{ fontSize: "1rem" }} span={3} label="后端">Net Core</Descriptions.Item>
                        <Descriptions.Item key="d" contentStyle={{ fontSize: "1rem" }} span={3} label="数据库"><ConsoleSqlOutlined /> Mysql</Descriptions.Item>
                        <Descriptions.Item key="f" contentStyle={{ fontSize: "1rem" }} span={3} label="服务器"><AliyunOutlined /> 阿里云</Descriptions.Item>

                    </Descriptions>
                </QueueAnim>
            </div>

        )
    }
}
