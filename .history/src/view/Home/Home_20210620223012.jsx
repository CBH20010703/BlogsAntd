import React, { Component } from 'react'
import "./Home.css"
export default class Home extends Component {
      handleClick = e => {
    console.log('click ', e);
  };
    render() {
        return (
            <div>
                测试
            </div>
        )
    }
}
