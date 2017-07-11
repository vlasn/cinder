import React, {  Component } from "react"
import { connect } from "react-redux"
import { setPreference } from "./settingsActions"

require("./Settings.scss")

class Settings extends Component {
    constructor(props) {
        super(props)
        this.setPreference = this.setPreference.bind(this)
    }
    setPreference(pref) {
        this.props.setPreference(pref)
        this.props.history.push("/")
    }
    render() {
        return(
            <div className="Settings">
                <div className="Settings__question">Are you into boys or girls?</div>
                <button
                    className="Settings__button boys"
                    onClick={()=>this.setPreference("boy")}
                >Boys</button>
                <button
                    className="Settings__button girls"
                    onClick={()=>this.setPreference("girl")}
                >Girls</button>
                <button
                    className="Settings__button yes"
                    onClick={()=>this.setPreference("both")}
                >yes</button>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    currentSetting: state.preference,
})
export default connect(mapStateToProps, {setPreference})(Settings)