import React, { Component } from "react"
import PropTypes from "prop-types"
import SingleMatch from "./SingleMatch"
import "./Matches.scss"

export default class Matches extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.resetUnseen()
    }
    render() {
        return(
            <div className="Matches View">
                {this.props.matchCount === 0 ?
                    <div className="Matches__none">
                        Unfortunately, it doesn't look like anyone's swiped right on you yet. Their loss.
                    </div> :
                    <div className="Matches__list">
                        <div className="Matches__count">
                            {this.props.matchCount} budding flames - kindling 'em is up to you. If you know what I mean.
                        </div>
                        {this.props.matches
                            .map(item => <SingleMatch {...item} key={item.id} history = {this.props.history} />)}
                    </div>
                }
            </div>
        )
    }
}
Matches.propTypes = {
    matchCount: PropTypes.number.isRequired,
    matches: PropTypes.array.isRequired,
    resetUnseen: PropTypes.func.isRequired,
    history: PropTypes.object
}