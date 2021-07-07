
import { React, Component } from "react";
import Headers from '../../component/Header/Headers';
import MenuList from '../../component/Menu/MenuList';
import Footers from '../../component/Footer/Footers';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom'
import Icon from '@ant-design/icons';
import Home from "../Home/Home.jsx";
import Navcode from "../NavCode/NavCode.jsx"
import Aricle from "../Article/Aricle";
import Error from "../404/Error";
import DataEmpty from "../404/DataEmpty";
import User from "../User/User";
const { Content, Sider } = Layout;
const HeartSvg = () => (
  <svg t="1625366862492" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4222" width="32" height="32"><path d="M701.866667 681.386667l17.92 104.106666c-11.093333 5.973333-29.013333 11.52-52.906667 16.64-24.32 5.546667-52.906667 8.533333-85.76 8.533334-94.293333-1.706667-165.12-29.866667-212.48-83.626667-48.64-54.186667-71.68-122.88-71.68-206.08C298.666667 422.4 327.68 346.88 384 293.973333 438.613333 240.64 508.586667 213.333333 593.066667 213.333333c32 0 59.733333 2.986667 82.773333 8.106667s40.106667 10.666667 51.2 17.066667l-25.6 106.24-44.373333-14.506667c-17.066667-4.266667-37.12-6.4-59.733334-6.4-49.066667-0.426667-90.026667 15.36-122.026666 46.933333-32.426667 31.146667-48.64 78.933333-50.346667 142.506667 0.426667 58.026667 15.786667 103.253333 46.08 136.533333 30.293333 32.853333 72.533333 49.92 127.573333 50.346667l56.746667-5.12c18.346667-3.413333 33.706667-8.106667 46.506667-13.653333z" fill="#0277BD" p-id="4223"></path></svg>
);
const HeartIcon = props => <Icon component={HeartSvg} {...props} />;

export default class Context extends Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: false, loading: true, ArrMenuData: [] }
    setTimeout(() => {
      this.setState({
        loading: false,

      })
    }, 1000)

  }
  componentDidMount() {
    if (!this.IsPC()) {
      window.location.href = "/Phone"
    }
  }
  toggle = (data) => {

    this.setState({
      collapsed: data,
    });
  };
  IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
      "SymbianOS", "Windows Phone",
      "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
      }
    }
    return flag;
  }
  GetMenuData = (data) => {
    console.log(data);
    this.setState({
      ArrMenuData: data
    })

  }

  render() {
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
          <div className="logo" >
            <HeartIcon />
          </div>
          <MenuList GetMenuData={this.GetMenuData} />
        </Sider>
        <Layout className="site-layout" style={{ paddingLeft: this.state.collapsed ? "60px" : "200px", transition: "0.1s ease" }}>
          <Headers toggle={this.toggle} parent={this.state.collapsed}></Headers>
          <Content style={{ margin: '24px 20px 0', height: "auto", padding: "20px" }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/index" component={Home} />
              <Route exact path="/Navcode" component={Navcode} ></Route>
              <Route exact path="/DataEmpty" component={DataEmpty}></Route>
              <Route exact path="/User" component={User}></Route>
              {
                this.state.ArrMenuData.map((item, index) => {
                  return <Route key={index} exact path={"/Article/" + item.artricle_id} component={Aricle} />
                })
              }
              <Route exact path="*" component={Error}></Route>
            </Switch>

          </Content>

          <Footers />
        </Layout>
      </Layout>


    );
  }
}




