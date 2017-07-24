import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import "./Header.scss"

const Header = ({unseenMatches}) => (
    <div className="Header">
        <div className="Header-item small"><Link to="/settings">Settings</Link></div>
        <div className="Header-item large"><Link to="/"><h2>CINDER</h2></Link></div>
        <div className="Header-item small">
            <Link to="/matches">
                Matches {unseenMatches>0 && `(${unseenMatches})`}
            </Link>
        </div>
    </div>
)

export default connect(state => ({unseenMatches: state.matches.unseenMatches}))(Header)