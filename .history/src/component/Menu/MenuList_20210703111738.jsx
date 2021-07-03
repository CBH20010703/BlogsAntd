import React, { Component } from 'react'
import { Menu } from 'antd';
import { Link } from 'react-router-dom'
import { GetMenuList } from "../../request/apiconfig"
import "./MenuList.css"
import {
  CodeSandboxOutlined,
} from '@ant-design/icons';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default class MenuList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menus: [],
    }
    this.InitMenu();

  }

  //
  InitMenu = async () => {
    let that = this;
    let { menus } = this.state;
    await GetMenuList().then((res) => {
      menus = res;
      that.setState({
        menus: menus
      })
    }).catch((er) => {

    })

  }
  // EachMenu = this.state.menus.map((item, index) => {

  // })
  render() {
    const listItems = this.state.menus.map((item, index) => {
      return <Menu.Item key={index} icon={{< CodeSandboxOutlined />}}>
    <Link to="/Index">{item.menu_title}
    </Link>
      </Menu.Item >
    })

  return(
      <Menu theme = "dark" mode = "inline" defaultSelectedKeys = { ['1']} >
      { listItems }
      </Menu>
    )
  }
}
{/* <Menu.Item key="2" icon={<UserOutlined />}>
  <Link to="/NavCode"> navcode{this.state.menus.length}
  </Link>

</Menu.Item> */}
