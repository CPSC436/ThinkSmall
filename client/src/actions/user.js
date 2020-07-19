import axios from 'axios'

export const LOAD_CURRENT_USER = 'LOAD_CURRENT_USER'
export const LOAD_USERS = 'LOAD_USERS'
export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const SET_USERS = 'SET_USERS'

const loadCurrentUser = () => ({
    type: LOAD_CURRENT_USER,
})

const loadUsers = () => ({
    type: LOAD_USERS,
})

const setCurrentUser = data => ({
    type: SET_CURRENT_USER,
    data,
})

const setUsers = data => ({
    type: SET_USERS,
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

export function getUserById(id) {
    return async dispatch => {
        dispatch(loadCurrentUser())

        try {
            const res = await axios.get(`http://localhost:8080/user/${id}`)
            return dispatch(setCurrentUser(res.data.data))
        } catch (err) {
            console.log(err)
        }
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

export function updateUser(id, body) {
    return async dispatch => {
        try {
            await axios.put(`http://localhost:8080/user/${id}`, body)
            return dispatch(getUserById(id))
        } catch (err) {
            console.log(err)
        }
    }
}

export function getCurrentUser() {
    return async (dispatch, getState) => {
        const { currentUser } = getState()
        const id = currentUser.data._id

        if (id) {
            dispatch(getUserById(id))
        } else {
            dispatch(loadCurrentUser())

            try {
                const res = await axios.get('http://localhost:8080/me')
                dispatch(getUserById(res.data._id))
            } catch (err) {
                console.log(err)
            }
        }
    }
}
