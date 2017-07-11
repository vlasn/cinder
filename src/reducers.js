import { combineReducers } from "redux"

import meta from "./components/Settings/settingsReducer"
import profiles from "./components/Profile/profileReducer"
import matches from "./components/Matches/matchesReducer"
export default combineReducers({
    meta,
    profiles,
    matches
})