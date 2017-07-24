import React from "react"
import { Link } from "react-router-dom"

import "./Header.scss"

const Header = props => (
    <div className="Header">
        <div className="Header-item small"><Link to="/settings">Settings</Link></div>
        <div className="Header-item large"><Link to="/"><h2>CINDER</h2></Link></div>
        <div className="Header-item small"><Link to="/matches">Matches</Link></div>
    </div>
)

export default Header