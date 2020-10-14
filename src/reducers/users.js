import {
    FETCH_USERS_SUCCESS,
    FETCH_USERS_REQUEST,
    FETCH_USERS_FAIL,
    SORTED_BY_ID
} from "../actions/types"

const appUsers = (state, action) => {
    const { type, payload } = action
    if (state === undefined) {
        return {
            users: localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [],
            loading: true,
            error: null
        }
    }
    switch (type) {
        case FETCH_USERS_REQUEST:
            return {
                users: [],
                loading: true,
                error: null
            }
        case FETCH_USERS_SUCCESS:
            localStorage.setItem("users", JSON.stringify(payload))
            return {
                users: payload,
                loading: false,
                error: null
            }
        case SORTED_BY_ID:
            return {
                ...state,
                users: payload
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