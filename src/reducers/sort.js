import { SORTED_BY_ID } from "../actions/types"


const appSort = (state, action) => {
    const { type, payload } = action

    if (state === undefined) {
        return {
            sortedUsers: ""
        }
    }

    switch (type) {
        case SORTED_BY_ID:
            return {
                ...state,
                sortedUsers: payload
            }
        default:
            return state
    }
}
export default appSort;