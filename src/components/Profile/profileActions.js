import axios from "axios"

export const GETTING_PROFILE = "GETTING_PROFILE"
export const GOT_PROFILE = "GOT_PROFILE"

export const getProfile = (id, preference) => {
    let baseURL = "http://www.dragonsofmugloar.com/dating/api/profile/"
    if(!id){
        baseURL+= "random"
        if(preference === "boy" || preference === "girl") {
            baseURL += "?gender="+preference
        }
    } else {
        baseURL+=id
    }
    return dispatch => {
        dispatch({
            type: GETTING_PROFILE
        })
        axios.get(baseURL)
            .then(({ data }) => {
                dispatch({
                    type: GOT_PROFILE,
                    profile: data
                })
            })
            .catch(console.log("Uh-oh.."))
    }
}
