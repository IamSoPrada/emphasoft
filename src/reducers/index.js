import { combineReducers } from "redux"

import appAuth from "./auth"
import appAlerts from "./alert"
import appUsers from "./users"
import appFind from "./find"

export default combineReducers({
    appAlerts,
    appAuth,
    appUsers,
    appFind
})