import { combineReducers } from "redux"

import { settingsReducer as meta } from "./components/Settings/settingsDucks"
import { profileReducer as profiles } from "./components/Profile/profileReducer"
import { matchesReducer as matches } from "./components/Matches/matchesDucks"

export default combineReducers({
    meta,
    profiles,
    matches
})