import TransitionGroup from "react-addons-css-transition-group"
import React from "react"

const defaultConfig = {
    transitionName: "view",
    transitionEnterTimeout: 200,
    transitionLeaveTimeout: 100
}

const Transition = ({ config = defaultConfig, ...props }) => (
    <TransitionGroup { ...config }>
        {React.cloneElement(props.children)}
    </TransitionGroup>
)

export default Transition