import React, { Component } from 'react'
import { Layout, Avatar, Dropdown, Menu } from 'antd';
import "./Headers.css"
////
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';


const { Header } = Layout;
export default class Headers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: false
        }
    }
    Tab = () => {
        let { isShow } = this.state;
        this.setState({
            isShow: !isShow
        })
        this.props.toggle(!isShow);

    }
    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <a rel="noopener noreferrer" href="/User">
                        个人中心

                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a rel="noopener noreferrer" >
                        退出登录
                    </a>
                </Menu.Item>

            </Menu>
        );
        return (

            <Header className="site-layout-background" style={{ paddingLeft: "10px" }} >
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    {React.createElement(this.state.isShow ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: this.Tab,

                    })}

                    <ul className="header-nav">
                        <li>
                            <Dropdown overlay={menu} placement="bottomCenter">
                                <Avatar style={{ background: "linear-gradient(135deg, #329fff 1%, #8c00ff 100%)", verticalAlign: 'middle' }} size="large" >
                                    C
                                </Avatar>
                            </Dropdown>
                        </li>
                    </ul>
                </div>
            </Header>

        )
    }
}
