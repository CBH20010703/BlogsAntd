
import { React, Component } from "react";
import Headers from '../../component/Header/Headers';
import MenuList from '../../component/Menu/MenuList';
import Footers from '../../component/Footer/Footers';

import { Skeleton, Layout } from 'antd';
import { Redirect, Route, Switch } from 'react-router-dom'
import Home from "../Home/Home.jsx";
import Navcode from "../NavCode/NavCode.jsx"
import Error from "../404/Error";
const { Content, Sider } = Layout;
export default class Context extends Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: false, loading: true }
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 3000)
  }
  toggle = (data) => {
    console.log(data)
    this.setState({
      collapsed: data,
    });
  };
  render() {
    let { loading } = this.state;
    return (

      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}
        >
          <MenuList />
        </Sider>
        <Layout className="site-layout" style={{ paddingLeft: this.state.collapsed ? "60px" : "200px", transition: "0.1s ease" }}>
          <Headers toggle={this.toggle} parent={this.state.collapsed}></Headers>
          <Content style={{ margin: '24px 16px 0', height: "auto", background: "#fff" }}>
            <Skeleton active loading={loading}>
              <Switch>
                <Route exact path="/index" component={Home} />
                <Route exact path="/NavCode" component={Navcode} />
                <Redirect exact path="/" to="/index"></Redirect>
                <Route path="*" component={Error}></Route>
              </Switch>
            </Skeleton>
          </Content>
          <Footers />
        </Layout>
      </Layout>


    );
  }
}




