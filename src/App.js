import './App.css';
import { React, Component } from "react";
import RouterMap from "./router/RouterMap"

export default class  App extends Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: false, }
    
  }
   
  toggle = (data) => {
    
    this.setState({
      collapsed: data,
    });
    
  };
  render() {
 
    return (
      <RouterMap/>
    );
  }
}
 



