import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from "../actions/types"



const appAuth = (state, action) => {
    const { type, payload } = action
    if (state === undefined) {
        return {
            token: localStorage.getItem('token'),
            authenticated: null,
            loading: false
        }
    }

    switch (type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.access);
            return {
                ...state,
                authenticated: true,
                loading: false,
                token: payload.access
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                authenticated: false,
                loading: true
            }
        case SIGNUP_FAIL:
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                authenticated: false,
                loading: false
            }
        default:
            return state;
    }

}

export default appAuth;