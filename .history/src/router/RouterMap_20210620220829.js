import React from 'react'
import { HashRouter, Route, Switch} from 'react-router-dom'
import Home from "../view/Home/Home.jsx";
import Error from "../view/404/Error.jsx";
export default class RouterMap  extends React.Component {
    updateHandle() {
        console.log('每次router变化之后都会触发')
    }
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route  path="*" component={Error} />
               </Switch>
            </HashRouter>
        )
    }
}


