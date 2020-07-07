import { LOAD_USERS, SET_USERS } from '../../actions'

const defaultUsers = {
    loading: true,
    loaded: false,
    data: [],
}

export default (users = defaultUsers, action) => {
    switch (action.type) {
    case LOAD_USERS: {
        return {
            ...users,
            loading: true,
            loaded: false,
        }
    }
    case SET_USERS: {
        return {
            ...users,
            loading: false,
            loaded: true,
            data: action.data,
        }
    }
    default:
        return users
    }
}
