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
      menulist: [],
    }

  }
  componentDidMount() {
    this.InitMenu();
  }
  //
  InitMenu = () => {
    GetMenuList().then((res) => {

      this.setState({
        menus: res
      })
    }).catch((res) => {

    })
  }
  EachMenu = this.state.menus.map((item, index) => {
    return <Menu.Item key={index} icon={<CodeSandboxOutlined />}>
      <Link to="/Index">首页
      </Link>
    </Menu.Item>
  })
  render() {

    return (
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        {this.EachMenu}
        <Menu.Item key="2" icon={<UserOutlined />}>
          <Link to="/NavCode"> navcode
          </Link>

        </Menu.Item>

      </Menu>
    )
  }
}
