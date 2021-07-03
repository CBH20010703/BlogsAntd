import React, { Component } from 'react'
import { Menu } from 'antd';
import { Link } from 'react-router-dom'
import { GetMenuList } from "../../request/apiconfig"
import "./MenuList.css"
import {

  UserOutlined,
  CodeSandboxOutlined,
} from '@ant-design/icons';
export default class MenuList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
    }

  }
  componentDidMount() {
    this.InitMenu();
  }
  //
  InitMenu = () => {
    GetMenuList().then((res) => {
      this.setState({
        menu: res
      })
    }).catch((res) => {

    })
  }
  EachMenu = () => {
    return menu.map((item, index) => {
      <Menu.Item key="1" icon={<UserOutlined />}>
        <Link to="/index"> 我的主页
        </Link>
      </Menu.Item>
    })
  }
  render() {

    return (
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        {this.EachMenu}
        <Menu.Item key="2" icon={<CodeSandboxOutlined />}>
          <Link to="/NavCode"> navcode
          </Link>

        </Menu.Item>

      </Menu>
    )
  }
}
