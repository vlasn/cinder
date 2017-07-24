import { MATCH_PROFILE } from "../Peruse/perusalActions"

export const INCREMENT_UNSEEN = "INCREMENT_UNSEEN_MATCHES"
export const RESET_UNSEEN = "RESET_UNSEEN"

export const incrementUnseen = () => ({type: INCREMENT_UNSEEN})
export const resetUnseen = () => ({type: RESET_UNSEEN})

export function matchesReducer(state = {
    matches: [],
    unseenMatches: 0
}, action) {
    switch(action.type) {
        case MATCH_PROFILE : {
            return { ...state, matches: [...state.matches, action.profile] }
        }
        case INCREMENT_UNSEEN : {
            return {...state, unseenMatches: state.unseenMatches+1}
        }
        case RESET_UNSEEN : {
            return {...state, unseenMatches: 0}
        }
        default : {
            return { ...state }
        }
    }
}