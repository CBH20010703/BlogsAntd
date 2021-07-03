import React, { Component } from 'react'
import "./Home.css"
export default class Home extends Component {
      handleClick = e => {
    console.log('click ', e);
  };
    render() {
        return (
            <div>
                内容区域
            </div>
        )
    }
}
