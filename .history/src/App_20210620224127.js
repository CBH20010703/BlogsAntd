import './App.css';
import { React, Component } from "react";
import Headers from './component/Header/Headers';
import MenuList from './component/Menu/MenuList';
import RouterMap from './router/RouterMap';
import { Layout} from 'antd';

const {  Content, Footer, Sider } = Layout;
export default class  App extends Component {
  constructor(props) {
    super(props);
    this.state = {  collapsed: false, }
  }
   toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() { 
    return (
      <Layout>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
       <MenuList/>
    </Sider>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Headers></Headers>
      {/* <Content style={{ margin: '24px 16px 0', overflow: 'initial',height:"100vh" }}>
          <RouterMap />
      </Content> */}
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
    );
  }
}
 



