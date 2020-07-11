import axios from 'axios'

export const LOAD_USERS = 'LOAD_USERS'
export const SET_USERS = 'SET_USERS'
export const LOAD_LOGIN_USER = 'LOAD_LOGIN_USER'

const loadUsers = () => ({
    type: LOAD_USERS,
})

const setUsers = data => ({
    type: SET_USERS,
    data,
})

const loadLoginUser = data => ({
    type: LOAD_LOGIN_USER,
    data,
})

export function getUsers(force = false) {
    return async (dispatch, getState) => {
        const { users } = getState()
        if (!force && users.loaded) return

        dispatch(loadUsers())

        try {
            const res = await axios.get('http://localhost:8080/users')
            return dispatch(setUsers(res.data.data))
        } catch (err) {
            console.log(err)
        }
    }
}

// need get userByID

export function userByID(id) {
    return async dispatch => {
        try {
            const user = await axios.get(`http://localhost:8080/user/${id}`)
            const userData = user.data
            return dispatch(loadLoginUser(userData))
        } catch (err) {
            console.log(err)
        }
    }
}

export function userByEmail(payload) {
    return async dispatch => {
        axios.get(`http://localhost:8080/user/${payload.email}`)
            .then(res => dispatch(loadLoginUser(res.data)))
            .catch(err => console.log(err))
    }
}

export function addUser(user) {
    return async dispatch => {
        try {
            await axios.post('http://localhost:8080/user', user)
            return dispatch(getUsers(true))
        } catch (err) {
            console.log(err)
        }
    }
}
