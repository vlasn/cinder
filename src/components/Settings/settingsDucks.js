import {MATCH_PROFILE} from "../Peruse/perusalActions"
export const SET_PREFERENCE = "SET_PREFERENCE"

export function settingsReducer(state={
    preference: "both",
    name: "",
    matches: []
}, action) {
    switch(action.type) {
        case SET_PREFERENCE : {
            return { ...state, preference: action.preference }
        }
        default : {
            return { ...state }
        }
    }
}

export const setPreference = preference => ({type: SET_PREFERENCE, preference: preference})