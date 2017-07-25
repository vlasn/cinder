import { connect } from "react-redux"
import { resetUnseen } from "./matchesDucks"
import Matches from "./Matches"

const mapStateToProps = (state) => ({
    loading: state.matches.loading,
    matches: state.matches.matches,
    matchCount: state.matches.matches.length,
    searchTerm: state.matches.searchTerm
})

export default connect(mapStateToProps, { resetUnseen })(Matches)