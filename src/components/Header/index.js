import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

import "./Header.scss"

const Header = ({ unseenMatches }) => (
    <div className="Header">
        <div className="Header-item small"><Link to="/settings">
            {"Settings "}
            <i className="fa fa-cogs" aria-hidden="true"> </i>
        </Link></div>
        <div className="Header-item large"><Link to="/"><h2>CINDER</h2></Link></div>
        <div className="Header-item small">
            <Link to="/matches">
                {"Matches "}
                <i className="fa fa-fire" aria-hidden="true"> </i>
                { unseenMatches > 0 && ` (+${ unseenMatches })`}
            </Link>
        </div>
    </div>
)

Header.propTypes = {
    unseenMatches: PropTypes.number.isRequired
}
export default connect(state => ({ unseenMatches: state.matches.unseenMatches }))(Header)