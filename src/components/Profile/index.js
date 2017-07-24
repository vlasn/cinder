import React from "react"
import { connect } from "react-redux"
import { getProfile } from "./profileActions"
import Profile from "./ProfileLayout"
import "./Profile.scss"

const mapStateToProps = (state, ownProps) => ({
    matches: state.matches.matches,
    id: ownProps.match.params.id || false,
    current: state.profiles.current,
    preference: state.meta.preference,
    loading: state.profiles.loading,
    next: state.profiles.next
})

export default connect(mapStateToProps, {getProfile})(Profile)