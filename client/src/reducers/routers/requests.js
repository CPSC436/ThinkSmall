import {
    DELETE_REQUEST, LOAD_REQUESTS, SET_REQUESTS,
} from '../../actions'
import { defaultState } from './misc'

export default (requests = defaultState, action) => {
    switch (action.type) {
    case LOAD_REQUESTS: {
        return {
            ...requests,
            loading: true,
            loaded: false,
        }
    }
    case SET_REQUESTS: {
        return {
            ...requests,
            loading: false,
            loaded: true,
            data: action.data,
        }
    }
    case DELETE_REQUEST: {
        return [...requests.filter(({ id }) => id !== action.id)]
    }
    default:
        return requests
    }
}
