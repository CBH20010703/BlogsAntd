import React, { Component } from 'react'
import { Row, Col, Card, Avatar, Tag, } from 'antd';
import "./User.css"
import {
    CalendarOutlined,
    DropboxOutlined,
    EnvironmentOutlined,
} from '@ant-design/icons';
export default class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editInputValue: '',
            inputValue: '',
            tags: ['Unremovable', 'Tag 2', 'Tag 3'],
            editInputIndex: -1,
            inputVisible: false,
        }

    }

    render() {


        return (
            <div className="site-card-wrapper">
                <Row gutter={[16, 16]} style={{ background: "#f0f2f5" }}>
                    <Col span={24} lg={7}>
                        <Card bordered={false}>
                            <div className="UserAvatar">
                                <Avatar style={{ background: "linear-gradient(135deg, #329fff 1%, #8c00ff 100%)", verticalAlign: 'middle' }} size="large" >
                                    C
                                </Avatar>
                                <p className="UserName">CenBoHao</p>
                                <p className="UserTitle">卧龙安知凤雏之志</p>
                                <div>
                                    <p><CalendarOutlined /> 小开发 </p>
                                    <p><DropboxOutlined /> xxxx－某某某事业群－某某平台部－某某技术部－UED</p>
                                    <p><EnvironmentOutlined /> 河南省信阳市</p>
                                </div>
                            </div>
                            <div className="ant-divider-dashed">

                            </div>
                            <div className="ant-tagbox">
                                <p>标签</p>
                                <div>
                                    <Tag color="#f50">#f50</Tag>
                                    <Tag color="#2db7f5">#2db7f5</Tag>
                                    <Tag color="#87d068">#87d068</Tag>
                                    <Tag color="#108ee9">#108ee9</Tag>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col sspan={24} lg={17}>
                        <Card bordered={false}>
                            Card content
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
