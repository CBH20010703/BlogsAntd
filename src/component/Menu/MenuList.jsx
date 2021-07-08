import React, { Component } from 'react'
import { Menu } from 'antd';
import { Link } from 'react-router-dom'

import { GetMenuList } from "../../request/apiconfig"
import "./MenuList.css"
const { SubMenu } = Menu;



export default class MenuList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menus: [],
      showKey: ["1-0"],
      articleArr: []
    }
    this.InitMenu();
  }

  //

  InitMenu = () => {
    let that = this;
    let { menus, articleArr } = this.state;
    GetMenuList().then((res) => {
      menus = res;

      menus.forEach(item => {
        item.menuChildrenList.forEach(items => {
          items.articleslList.forEach(itemsc => {
            articleArr.push(itemsc)
          })

        })
      })

      that.setState({
        menus: menus,
        articleArr: articleArr
      })
      this.props.GetMenuData(articleArr);
    }).catch((error) => {
      console.log("1111")
    })

  }
  // EachMenu = this.state.menus.map((item, index) => {

  // })


  render() {


    const onOpenChange = keys => {
      let { showKey } = this.state;
      let ShowIndex = keys.find(key => showKey.indexOf(key) === -1)
      ShowIndex = ShowIndex ? ShowIndex : [keys]
      let showItem = typeof (ShowIndex) == "string" ? [ShowIndex.split(",")[0], ShowIndex] : ShowIndex[0]
      this.setState({
        showKey: showItem
      })

    };

    let listItems = null;
    listItems = this.state.menus.map((item) => {
      return <SubMenu key={item.menu_Id + "-0"} icon={React.createElement("i", { className: item.menu_icon })} title={item.menu_title}>
        {
          item.menuChildrenList.map((childeritem, i) => {
            if (JSON.stringify(childeritem.articleslList) === "[]") {
              return <Menu.Item key={item.menu_Id + "-" + i + 1}><Link to="/DataEmpty">{childeritem.children_title}</Link> </Menu.Item>
            } else {
              return <SubMenu key={item.menu_Id + "-0," + item.menu_Id + "-" + (i + 1)} title={childeritem.children_title}>
                {
                  childeritem.articleslList.map((childeritemNode, nodeindex) => {
                    var path = {
                      pathname: "/Article/" + childeritemNode.artricle_id,
                      state: childeritemNode,
                    }

                    return <Menu.Item key={item.menu_Id + "-" + i + "-" + nodeindex}><Link to={path}>{childeritemNode.article_title}</Link></Menu.Item>
                  })
                }
              </SubMenu>
            }

          })
        }
      </SubMenu>
    })

    // <Menu.Item key={index} icon={React.createElement("i", { className: item.menu_icon })}>
    //   <Link to="/Index">{item.menu_title}
    //   </Link>
    // </Menu.Item>

    return (
      <Menu theme="dark" mode="inline" openKeys={this.state.showKey} onOpenChange={onOpenChange} >
        <Menu.Item key="0-0" ><Link to="/">首页</Link></Menu.Item>
        {listItems}
      </Menu>
    )
  }
}

