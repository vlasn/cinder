import React, { Component } from "react"
import { connect } from "react-redux"
import { resetUnseen } from "./matchesDucks"
import "./Matches.scss"

class Matches extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.resetUnseen()
    }
    render() {
        return(
            <div className="Matches View">
                {this.props.matches.length === 0 ?
                    <div className="Matches__none">
                        Unfortunately, it doesn't look like anyone's swiped right on you yet. Their loss.
                    </div> :
                    <div className="matchesList">
                        <div className="Matches__count">
                             {this.props.matchCount} matches - go start the fire!
                        </div>
                        {this.props.matches
                            .map(item => <OneMatch {...item} key={item.id} history = {this.props.history} />)}
                    </div>
                }

            </div>
        )
    }
}

const OneMatch = ({image, name, id, history}) => {
    let navigaj = () => history.push("/profile/"+id)
    return (
        <div className="SingleMatch" onClick={navigaj}>
            <div className="SingleMatch__img-wrapper"><img className="SingleMatch__img" src={image}/></div>
            <div className="SingleMatch__name-wrapper">{name}</div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    loading: state.matches.loading,
    matches: state.matches.matches,
    matchCount: state.matches.matches.length,
    searchTerm: state.matches.searchTerm
})

export default connect(mapStateToProps, { resetUnseen })(Matches)