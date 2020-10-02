import { SET_ALERT, REMOVE_ALERT } from "../actions/types"

const appAlerts = (state, action) => {

    const { type, payload } = action

    if (state === undefined) {
        return []
    }
    switch (type) {
        case SET_ALERT:
            return [...state, payload]
        case REMOVE_ALERT:
            return state.filter(alert => alert.id !== payload)
        default:
            return state
    }



}
export default appAlerts;