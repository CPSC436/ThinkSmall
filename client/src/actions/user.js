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
    console.log('i am out here')
    return async dispatch => {
        try {
            console.log('i am here')
            const updatedUrl = `http://localhost:8080/user/${id}`
            const user = await axios.get(updatedUrl)
            const userData = user.data
            return dispatch(loadLoginUser(userData))
        } catch (err) {
            console.log(err)
        }
    }
}

export function userByEmail(payload) {
    return async dispatch => {
        try {
            alert('I made it here')
            const res = await axios.get(`http://localhost:8080/user/${payload.email}`)
            return dispatch(loadLoginUser(res.data))
        } catch (err) {
            console.log(err)
        }
    }
}

export function addUser(user) {
    return async dispatch => {
        try {
            alert('user added')
            await axios.post('http://localhost:8080/user', user)
            return dispatch(getUsers(true))
        } catch (err) {
            console.log(err)
        }
    }
}
