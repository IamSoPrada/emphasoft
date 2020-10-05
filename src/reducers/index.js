import { combineReducers } from "redux"

import appAuth from "./auth"
import appAlerts from "./alert"
import appUsers from "./users"

export default combineReducers({
    appAlerts,
    appAuth,
    appUsers
})