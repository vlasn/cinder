import React from "react"
import PropTypes from "prop-types"
import "./Matches.scss"

const OneMatch = ({ image, name, id, history }) => {
    let navigaj = () => history.push("/profile/"+id)
    return (
        <div className="SingleMatch" onClick={navigaj}>
            <div className="SingleMatch__img-wrapper"><img className="SingleMatch__img" src={image}/></div>
            <div className="SingleMatch__name-wrapper">
                <span className="SingleMatch__name">
                    {name}
                </span>
            </div>
        </div>
    )
}

OneMatch.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    history: PropTypes.object.isRequired,
}

export default OneMatch