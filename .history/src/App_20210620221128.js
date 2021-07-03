import './App.css';
import { React, Component } from "react";
import RouterMap from './router/RouterMap';
import { Layout, Menu } from 'antd';
export default class  App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div>
        <RouterMap/>
      </div>
    );
  }
}
 



