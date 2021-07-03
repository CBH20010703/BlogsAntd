import './App.css';
import { React, Component } from "react";
import RouterMap from './router/RouterMap';
import { Layout, Menu } from 'antd'; 
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
const { Header, Sider, Content } = Layout;

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
      <div>
        
        <RouterMap/>
      </div>
    );
  }
}
 



