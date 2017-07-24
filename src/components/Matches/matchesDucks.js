import { MATCH_PROFILE } from "../Peruse/perusalActions"

export function matchesReducer(state = {
    matches: []
}, action) {
    switch(action.type) {
        case MATCH_PROFILE : {
            return{
                ...state,
                matches: [...state.matches, action.profile]
            }
        }
        default : {
            return {
                ...state
            }
        }
    }
}