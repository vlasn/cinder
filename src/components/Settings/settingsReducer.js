import {} from "./settingsActions"
import {MATCH_PROFILE} from "../Peruse/perusalActions"
import { SET_PREFERENCE } from "./settingsActions"

export default function (state={
    preference: "both",
    name: "",
    matches: []
}, action) {
    switch(action.type) {
        case "DEFAULT" : {
            return {
                ...state
            }
        }
        case SET_PREFERENCE : {
            return {
                ...state,
                preference: action.preference
            }
        }
        default : {
            return {
                ...state
            }
        }
    }
}