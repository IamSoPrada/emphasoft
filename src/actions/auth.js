import axios from "axios"
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from "./types"


axios.defaults.baseURL = 'https://emphasoft-test-assignment.herokuapp.com/';

export const login = (username, password) => async dispatch => {
    const conf = {
        headers: {
            "Accept": "application/json",
            'Content-Type': "application/json"
        }
    }

    const body = JSON.stringify({ username, password } );

    try {
        const res = await axios.post("api-token-auth/", body, conf)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL
        })
    }
}



export const logout = () => dispatch => {
    dispatch({ type: LOGOUT })
}