import {
    FETCH_USERS_SUCCESS,
    FETCH_USERS_REQUEST,
    FETCH_USERS_FAIL
} from "../actions/types"

const appUsers = (state, action) => {
    const { type, payload } = action
    if (state === undefined) {
        return {
            users: [],
            loading: true,
            error: null
        }
    }
    switch (type) {
        case FETCH_USERS_REQUEST:
            return {
                users: [],
                loading: false,
                error: null
            }
        case FETCH_USERS_SUCCESS:
            return {
                users: payload,
                loading: false,
                error: null
            }
        case FETCH_USERS_FAIL:
            return {
                users: [],
                loading: false,
                error: payload
            }
        default:
            return state
    }

}

export default appUsers;