import React, { Component } from 'react'
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
export default class Home extends Component {
      handleClick = e => {
    console.log('click ', e);
  };
    render() {
        return (
            <div>
                Home
            </div>
        )
    }
}
