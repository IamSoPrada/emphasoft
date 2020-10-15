import {
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL,
} from "../actions/types"


const appCrud = (state, action) => {
    const { type } = action
    if (state === undefined) {
        return {
            token: localStorage.getItem('token'),
            authenticated: localStorage.getItem('token') ? true : null,
            loading: false
        }
    }
    switch(type){
        case CREATE_USER_SUCCESS:
            return {
                ...state,
                authenticated: localStorage.getItem('token') ? true : null,
                loading: false,
                }
        case CREATE_USER_FAIL:
            return {
                ...state,
                error: true
            }

        default:
            return state
    }
}

export default appCrud;