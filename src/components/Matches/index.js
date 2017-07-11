import React, { Component } from "react"
import { connect } from "react-redux"
require("./Matches.scss")

class Matches extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div className="Matches">
                {this.props.matches.length === 0 ?
                    <div>
                        Unfortunately, it doesn't look like anyone's swiped right on you yet. Their loss.
                    </div> :
                    <div className="matchesList">
                        {this.props.matches.map(item => <OneMatch {...item} key={item.id} history = {this.props.history} />)}
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
    matches: state.matches.matches
})

export default connect(mapStateToProps)(Matches)