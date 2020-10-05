import axios from "axios"
import { setAlert } from "./alert"


import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
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
        dispatch(setAlert("Вы авторизованы", "success"))
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL
        })

        dispatch(setAlert("Ошибка авторизации", "error"))
    }
}

export const signup = ({ id, username, first_name, last_name, password, is_active }) => async dispatch => {
    const conf = {
        headers: {
            /* 'Authorization': 'Token' + localStorage.getItem('token'), */
            'Content-Type': "application/json",
        }
    }
    const body = JSON.stringify({ id, username, first_name, last_name, password, is_active })

    try {
        const res = await axios.post("api/v1/users/", body, conf)
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data,
        })
    } catch (err) {
        dispatch({
            type: SIGNUP_FAIL
        })
        dispatch(setAlert("Ошибка авторизации", "error"))
    }

}

export const logout = () => dispatch => {
    dispatch(setAlert("Вы вышли из аккаунта", "success"))
    dispatch({ type: LOGOUT })
}