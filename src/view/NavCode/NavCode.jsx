import React, { Component } from 'react'
import { Skeleton, Card, Avatar, Row, Col } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

import "./NavCode.css"

export default class NavCode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            arrayMap: [1, 2, 3, 4, 5, 6, 7]
        }
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 1500)
    }
    handleClick = e => {
        console.log('click ', e);
    };
    render() {
        const { Meta } = Card;

        let { loading, arrayMap } = this.state;
        let ColCard = arrayMap.map((item, index) => {
            return <Col key={index} className="gutter-row padding-tb" xl={6} lg={8} md={24} sm={24} xs={24} >
                <Skeleton loading={loading}>
                    <Card
                        style={{ width: "100%" }}
                        loading={loading}
                        cover={
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                        }
                        actions={[
                            <SettingOutlined key="setting" />,
                            <EditOutlined key="edit" />,
                            <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                        <Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>

                </Skeleton>
            </Col>

        })
        return (
            <div style={{ padding: "20px" }}>
                <Row gutter={{ xs: 24, sm: 24, md: 24, lg: 32 }}>
                    {ColCard}
                </Row>
            </div>
        )
    }
}
