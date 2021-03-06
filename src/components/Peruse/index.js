import React, { Component } from "react"
import { connect } from "react-redux"
import { judgeProfile } from "./perusalActions"
import Profile from "../Profile"
import "./Peruse.scss"

import PropTypes from "prop-types"

class Peruse extends Component {
    constructor(props) {
        super(props)
        this.judge = this.judge.bind(this)
    }
    judge(liked) {
        this.props.judgeProfile(this.props.current, liked, this.props.current.likesYou)
    }
    render() {
        return(
            <div className="Peruse View">
                <div className="Peruse__profile-wrapper">
                    <Profile match={{ params:{ id:false } }}/>
                </div>
                <div className="Peruse__options-wrapper">
                    <button className="Peruse__button no" onClick={()=>this.judge(false)}>Nay 😩</button>
                    <button className="Peruse__button yes" onClick={()=>this.judge(true)}>Yay 🔥</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    loading: state.profiles.loading,
    current: state.profiles.current
})

Peruse.propTypes = {
    current: PropTypes.shape({
        description: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        likesYou: PropTypes.bool.isRequired,
        gender: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    }),
    judgeProfile: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { judgeProfile })(Peruse)