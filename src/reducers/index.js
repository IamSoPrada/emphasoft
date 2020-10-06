import { combineReducers } from "redux"

import appAuth from "./auth"
import appUsers from "./users"
import appFind from "./find"
import appSort from "./sort"

export default combineReducers({
    appAuth,
    appUsers,
    appFind,
    appSort
})