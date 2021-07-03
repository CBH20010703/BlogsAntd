import React, { Component } from 'react'
import { Layout } from 'antd';


import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import "./Headers.css"
const { Header } = Layout;
export default class Headers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow:false
        }
    }
    Tab = () => {
        let { isShow } = this.state;
        this.setState({
            isShow:!isShow
        })
        this.props.toggle(!isShow);
        
    }
    render() {
    
        return (
          
                <Header className="site-layout-background" style={{ paddingLeft:"10px" }} >
                     {React.createElement(this.state.isShow ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
                         onClick: this.Tab,
              
            })}
                </Header>
           
        )
    }
}
