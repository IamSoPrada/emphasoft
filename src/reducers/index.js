import { combineReducers } from "redux"

import appAuth from "./auth"
import appAlerts from "./alert"


export default combineReducers({
    appAlerts,
    appAuth
})