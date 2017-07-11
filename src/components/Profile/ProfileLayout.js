import React, {Component} from "react"

export default class Profile extends Component {
    constructor(props){
        super(props)
    }
    componentWillMount() {
        this.props.getProfile(this.props.id, this.props.preference)
    }
    componentWillReceiveProps(newProps) {
        newProps.next && this.props.getProfile(this.props.id, this.props.preference)
    }
    render() {
        return (
            <div className="Profile__wrapper">
                { this.props.current && <div>
                    <img className="Profile__image" src={this.props.current.image}/>
                    <div className="Profile__about">
                        <div className="Profile__header-wrapper">
                            <span className="header-content">{this.props.current.name}</span>
                            <span className="header-content">{this.props.current.gender}</span>
                        </div>
                        <div className="Profile__description">
                            {this.props.current.description}
                        </div>
                        {this.props.id && <div className="Profile__matchymatch">
                            Does {this.props.current.name.split(" ")[0]} like you?
                            {
                                this.props.current.likesYou ?
                                " THEY DO!" :
                                " ¯\\_(ツ)_/¯"
                            }
                        </div> }
                    </div>
                </div>}
            </div>
        )
    }
}