import {MATCH_PROFILE} from "../Peruse/perusalActions"
export const SET_PREFERENCE = "SET_PREFERENCE"
export const SET_PREVIOUS = "SET_PREVIOUS"

export function settingsReducer(state={
    preference: "both",
    previous: "/",
    name: "",
    matches: []
}, action) {
    switch(action.type) {
        case SET_PREFERENCE : {
            return { ...state, preference: action.preference }
        }
        case SET_PREVIOUS : {
            return {...state, previous: action.route}
        }
        default : {
            return { ...state }
        }
    }
}

export const setPreference = preference => ({ type: SET_PREFERENCE, preference })
export const setPrevious = route => ({ type: SET_PREVIOUS, route })