import { combineReducers } from 'redux';
import {
    PUSH_MESSAGE,
<<<<<<< HEAD
    SET_CONVERSATION, SWITCH_VIEW,
=======
    SET_CONVERSATION,
    ADD_BUSINESS,
    DELETE_BUSINESS,
    EDIT_BUSINESS,
>>>>>>> 5708fc3... Naive implementation of businesses reducer
} from '../actions';
import { businesses, volunteers } from '../constant';
import { now } from './helper';

const defaultUsers = [
    {
        id: 0,
        name: 'Alice',
    },
    {
        id: 1,
        name: 'Dave',
    },
    {
        id: 2,
        name: 'Kelly',
    },
    {
        id: 3,
        name: 'Jenny',
    },
];

const defaultConversations = [
    {
        id: 0,
        channel: true,
        title: 'general',
        messages: [],
    },
    {
        id: 1,
        channel: true,
        title: 'announcements',
        messages: [],
    },
    {
        id: 2,
        channel: true,
        title: 'daebak',
        messages: [
            {
                id: 0,
                message: 'Hi, there!',
                timestamp: '12:03 PM',
                comments: [
                    { id: 1, message: 'Hello', timestamp: '12:05 PM' },
                    { id: 2, message: 'Hey!', timestamp: '12:07 PM' },
                ],
            },
            {
                id: 1,
                message: 'Hello!',
                timestamp: '12:05 PM',
            },
            {
                id: 2,
                message: 'Hi.',
                timestamp: '12:17 PM',
            },
            {
                id: 3,
                message: 'Hey there!',
                timestamp: '12:23 PM',
                comments: [
                    { id: 0, message: 'Run Forrest, run!', timestamp: '12:27 PM' },
                ],
            },
        ],
    },
    {
        id: 3,
        channel: false,
        title: 'Alice Kim',
        messages: [
            {
                id: 0,
                message: 'Hi, there!',
                timestamp: '12:03 PM',
                comments: [
                    { id: 1, message: 'Hello', timestamp: '12:05 PM' },
                    { id: 2, message: 'Hey!', timestamp: '12:07 PM' },
                ],
            },
            {
                id: 1,
                message: 'Hello!',
                timestamp: '12:05 PM',
            },
            {
                id: 0,
                message: 'How\'s your project going?',
                timestamp: '12:17 PM',
            },
        ],
    },
];

const defaultSwitchState = false;

export default combineReducers({
    users: (users = defaultUsers, action) => users,
    conversations: (conversations = defaultConversations, action) => {
        switch (action.type) {
            case PUSH_MESSAGE:
                const { uid, iid, message } = action;
                const { messages = [] } = conversations[iid];
                return Object.assign([...conversations], {
                    [iid]: {
                        ...conversations[iid],
                        messages: [...messages, { id: uid, message, timestamp: now() }],
                    },
                });
            default:
                return conversations;
        }
    },
    conversation: (conversation = 0, action) => {
        switch (action.type) {
            case SET_CONVERSATION:
                return action.id;
            default:
                return conversation;
        }
    },
    switchView: (switchState = defaultSwitchState, action) => {
        switch (action.type) {
            case SWITCH_VIEW:
                return !switchState;
            default:
                return switchState;
        }
    },
    businesses: (businesses = businesses, action) => {
        switch (action.type) {
            case ADD_BUSINESS:
                const {
                    storeName, avatar, storeOwner, location, description,
                    needsHelp, tags,
                } = action;
                const id = Math.random();
                return Object.assign([...businesses], {
                    [id]: id,
                    [storeName]: storeName,
                    [avatar]: avatar,
                    [storeOwner]: storeOwner,
                    [location]: location,
                    [description]: description,
                    [needsHelp]: needsHelp,
                    [tags]: tags,
                });
            case DELETE_BUSINESS:
                const updatedBusinesses = [...businesses];
                return delete updatedBusinesses[action.id];
            case EDIT_BUSINESS:
                const editedUsers = [...businesses];
                const properties = [storeName,
                    avatar,
                    storeOwner,
                    location,
                    description,
                    needsHelp,
                    tags];
                for (let i = 0; i < editedUsers.length; i++) {
                    if (editedUsers[i].id === action.id) {
                        for (let j = 0; j < 7; j++) {
                            editedUsers[i].properties[j] = properties[j];
                        }
                        break;
                    }
                }
                return editedUsers;
            default:
                return users;
        }
    },
    volunteers: (volunteers = volunteers, action) => {

    },
});
