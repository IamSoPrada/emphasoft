
import {
    FETCH_USERS_SUCCESS,
    FETCH_USERS_REQUEST,
    FETCH_USERS_FAIL
} from "./types"


const usersRequested = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const usersLoaded = (newUsers) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: newUsers
    }
}

const usersError = (error) => {
    return {
        type: FETCH_USERS_FAIL,
        payload: error
    }
}

const fetchUsers = (usersService, dispatch) => () => {
    dispatch(usersRequested())
    usersService.getUsers()
        .then((data) => dispatch(usersLoaded(data)))
        .catch((err) => usersError(err))
}

/* const fetchUser = (usersService, dispatch) => (id) => {
    dispatch(usersRequested())
    usersService.getUser(id)
        .then((data) => dispatch(usersLoaded(data)))
        .catch((err) => usersError(err))
} */

export {
    fetchUsers
}