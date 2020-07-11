import { LOAD_LOGIN_USER } from '../../actions'

const defaultUser = {
    owns: [],
    tags: [],
    available: false,
    _id: '5f0932a99eeb33d77955d15b',
    givenName: 'John',
    familyName: 'Doe',
    email: 'jdoe@mail.io',
    imageUrl: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    description: 'Hi! I run a small business in Vancouver. Looking forward to meeting you all!',
    updatedAt: '2020-07-11T04:06:36.008Z',
}

export default (user = defaultUser, action) => {
    switch (action.type) {
    case LOAD_LOGIN_USER: {
        console.log(action.data)
        return {
            ...user,
            owns: action.data.owns,
            tags: action.data.tags,
            available: action.data.available,
            _id: action.data._id,
            givenName: action.data.givenName,
            familyName: action.data.familyName,
            email: action.data.email,
            imageUrl: action.data.imageUrl,
            description: action.data.description,
            updatedAt: action.data.updatedAt,
        }
    }
    default:
        return user
    }
}
