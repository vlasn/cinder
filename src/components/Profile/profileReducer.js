
import {GETTING_PROFILE, GOT_PROFILE} from "./profileActions"
import {MATCH_PROFILE, REJECT_PROFILE} from "../Peruse/perusalActions"
export default function (state={
    loading: false,
    next: false,
}, action) {
    switch(action.type) {
        case GETTING_PROFILE : {
            return {
                ...state,
                loading: true,
                next: false,
            }
        }
        case GOT_PROFILE : {
            return {
                ...state,
                loading: false,
                next: false,
                current: action.profile,
                // cachedProfiles: state.cachedProfiles.indexOf(action.profile)<0 ?
                //     [...state.cachedProfiles, action.profile] :
                //     state.cachedProfiles
            }
        }
        case REJECT_PROFILE : {
            return {
                ...state, next: true
            }
        }
        case MATCH_PROFILE : {
            return {
                ...state, next: true
            }
        }

        default : {
            return {
                ...state
            }
        }
    }
}