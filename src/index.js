import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import {BrowserRouter as Router, Route, Redirect, Link, Switch} from "react-router-dom"
import store from "./store"
import Profile from "./components/Profile"
import Peruse from "./components/Peruse"
import Settings from "./components/Settings"
import Matches from "./components/Matches"

require("./index.scss")

const App = () =>
<Router history = {history}>
    <div className="Main">
        <div className="Main__header">
            <div className="Main__header-item small"><Link to="/settings">Settings</Link></div>
            <div className="Main__header-item large"><Link to="/"><h2>CINDER</h2></Link></div>
            <div className="Main__header-item small"><Link to="/matches">Matches</Link></div>
        </div>
        <Route exact path="/matches" component={Matches}/>
        <Route exact path="/undefined" render={()=><Redirect to="/"/>}/>
        <Route path="/profile/:id" component={Profile}/>
        <Route exact path="/settings" component={Settings}/>
        <Route exact path="/" component={Peruse}/>
    </div>
</Router>


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById("root")
)

//TODO:
// ALL the style

// currently displayed profile in /peruse should not be replaced by a new one after settings are changed if
// gender criteria are met

// Most presentational components should be refactored to stateless functional ones.