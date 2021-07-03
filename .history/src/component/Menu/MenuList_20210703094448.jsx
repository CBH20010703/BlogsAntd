import React, { Component } from 'react'
import { Menu } from 'antd';
import { Link } from 'react-router-dom'
import "./MenuList.css"
import {

  UserOutlined,
  CodeSandboxOutlined,
} from '@ant-design/icons';
export default class MenuList extends Component {
  constructor(props) {

    super(props);
  }
  render() {
    return (

      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to="/index"> 我的主页
          </Link>

        </Menu.Item>
        <Menu.Item key="2" icon={<CodeSandboxOutlined />}>
          <Link to="/NavCode"> navcode
          </Link>

        </Menu.Item>

      </Menu>
    )
  }
}
