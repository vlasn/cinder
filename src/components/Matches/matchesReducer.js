import {MATCH_PROFILE} from "../Peruse/perusalActions"

export default function(state = {
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