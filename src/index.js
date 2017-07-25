import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"
import Transition from "./components/Transition"
import store from "./store"
import Header from "./components/Header"
import Profile from "./components/Profile"
import Peruse from "./components/Peruse"
import Settings from "./components/Settings"
import Matches from "./components/Matches"

import "./index.scss"

const App = () => (
    <Router history = {history}>
        <div className="Main">
            <Header/>
            <div className="View-wrapper">
                <Route exact path="/undefined" render={()=><Redirect to="/"/>}/>
                 <Route render={({ location })=>(
                     <Transition history={history}>
                         <Switch key={location.key} location={location}>
                             <Route exact path="/matches" component={Matches}/>
                             <Route path="/profile/:id" component={Profile}/>
                             <Route exact path="/settings" component={Settings}/>
                             <Route exact path="/" component={Peruse}/>
                         </Switch>
                     </Transition>
                 )}/>
            </div>
        </div>
    </Router>
)

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