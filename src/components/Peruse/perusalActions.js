export const MATCH_PROFILE = "MATCH_PROFILE"
export const REJECT_PROFILE = "REJECT_PROFILE"

export const judgeProfile = (profile, like, likedByThem) => {
    return dispatch => {
        if(like && likedByThem) {
            console.log("submitting profile ", profile)
            dispatch({
                type: MATCH_PROFILE,
                profile: profile
            })
        } else {
            dispatch({
                type: REJECT_PROFILE
            })
        }
    }
};