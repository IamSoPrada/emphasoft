import { combineReducers } from "redux"

import appAuth from "./auth"
import appUsers from "./users"
import appFind from "./find"
import appCrud from "./crud"


export default combineReducers({
    appAuth,
    appUsers,
    appFind,
    appCrud
})