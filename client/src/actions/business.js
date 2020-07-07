import axios from 'axios'

export const LOAD_BUSINESSES = 'LOAD_BUSINESSES'
export const SET_BUSINESSES = 'SET_BUSINESSES'

const loadBusinesses = () => ({
    type: LOAD_BUSINESSES,
})

const setBusinesses = data => ({
    type: SET_BUSINESSES,
    data,
})

export function getBusinesses() {
    return async (dispatch, getState) => {
        const { businesses } = getState()
        if (businesses.loaded) return

        dispatch(loadBusinesses())

        try {
            const res = await axios.get('http://localhost:8080/businesses')
            console.log(res)
            return dispatch(setBusinesses(res.data.data))
        } catch (err) {
            console.log(err)
        }
    }
}
