import React from 'react'
import {  Route, Switch} from 'react-router-dom'
import Login from "../view/Login/Login"
import Context from '../view/context/context'
import { Spin } from 'antd';
import Phone from '../view/404/Phone';
export default class RouterMap extends React.Component {
    constructor(props) {
       
        super(props)
         this.state = {
            isLodding:false
        }
         setTimeout(() => {
            this.setState({
            isLodding:true
        })
      },2000)
    }
   
    render() {
        
        return (
            <div>
                    <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/phone"  component={Phone} />
                        <Route path="/" component={Context} auth={true} />
                    </Switch>
                <div className="example" style={{display:this.state.isLodding?"none":"block"}} >
                 <Spin size="large" />
            </div>
          </div>
        )
    }
}

