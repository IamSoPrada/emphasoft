import axios from "axios"
import {
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL,
} from "./types"

const AUTH_TOKEN = localStorage.getItem('token')

export const create = ({ username, first_name, last_name, password, is_active }) => async dispatch => {
    const conf = {
        headers: {
            'Content-Type': "application/json",
            "Authorization": `Token ${AUTH_TOKEN}`
        }
    }
    const body = JSON.stringify({  username, first_name, last_name, password, is_active })

    try {
        const res = await axios.post("api/v1/users/", body, conf)
        dispatch({
            type: CREATE_USER_SUCCESS,
            payload: res.data,
        })
    } catch (err) {
        dispatch({
            type: CREATE_USER_FAIL
        })

    }

}