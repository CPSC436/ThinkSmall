import Axios from 'axios'
import { getCurrentUser, updateUser } from './user'

export const LOAD_REQUESTS = 'LOAD_REQUESTS'
export const SET_REQUESTS = 'SET_REQUESTS'

const axios = Axios.create({
    baseURL: process.env.REACT_APP_WEBSITE_URL,
})

const loadRequests = () => ({
    type: LOAD_REQUESTS,
})

const setRequests = data => ({
    type: SET_REQUESTS,
    data,
})

export function getRequests(force = false) {
    return async (dispatch, getState) => {
        const { requests } = getState()
        if (!force && requests.loaded) return

        dispatch(loadRequests())

        try {
            const res = await axios.get('/requests')
            return dispatch(setRequests(res.data.data))
        } catch (err) {
            console.log(err)
        }
    }
}

export function addRequest(request) {
    return async (dispatch, getState) => {
        const { currentUser } = getState()
        try {
            const res = await axios.post('/request', request)
            dispatch(getRequests(true))
            dispatch(updateUser(currentUser.data._id, { $push: { requests: res.data.request } }))
            dispatch(getCurrentUser())
        } catch (err) {
            console.log(err)
        }
    }
}

export function deleteRequest(id) {
    return async dispatch => {
        try {
            await axios.delete(`/request/${id}`)
            dispatch(getRequests(true))
            dispatch(getCurrentUser())
        } catch (err) {
            console.log(err)
        }
    }
}

export function updateRequest(id, body) {
    return async dispatch => {
        try {
            await axios.put(`/request/${id}`, body)
            dispatch(getRequests(true))
            dispatch(getCurrentUser())
        } catch (err) {
            console.log(err)
        }
    }
}
