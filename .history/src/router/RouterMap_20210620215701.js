import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import Home from "../view/Home/Home.jsx";
import Error from "../view/404/Error.jsx";
export default class RouterMap  extends React.Component {
    updateHandle() {
        console.log('每次router变化之后都会触发')
    }
    render() {
        return (
             <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home}/>
                    <Route path="*" component={Error}/>
                </Route>
            </Router>
        )
    }
}


