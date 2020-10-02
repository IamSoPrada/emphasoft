import axios from "axios"
import { setAlert } from "./alert"
import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from "./types"

export const login = (email, password) => async dispatch => {
    const conf = {
        headers: {
            'Content-Type': "application/json"
        }
    }

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post(`${process.env.EMPHASOFT_API_URL}/api-token-auth/`, body, conf)
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

export const signup = ({ name, email, password, confirm_password }) => async dispatch => {
    const conf = {
        headers: {
            'Content-Type': "application/json"
        }
    }
    const body = JSON.stringify({ name, email, password, confirm_password })

    try {
        const res = await axios.post(`${process.env.EMPHASOFT_API_URL}/api/v1/users/`, body, conf)
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data
        })
        //сразу же залогинимся
        dispatch(login(email, password))
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