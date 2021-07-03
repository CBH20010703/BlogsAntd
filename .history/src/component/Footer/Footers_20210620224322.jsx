import React, { Component } from 'react'
import { Layout } from 'antd';
const {  Footer } = Layout;
export default class Footers extends Component {
    render() {
        return (
            <div>
               <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> 
            </div>
        )
    }
}
