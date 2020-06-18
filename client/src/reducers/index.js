import { combineReducers } from 'redux';
import {
    PUSH_MESSAGE,
    SET_CONVERSATION,
    ADD_BUSINESS,
    DELETE_BUSINESS,
    EDIT_BUSINESS, TOGGLE_HELP, ADD_VOLUNTEER, DELETE_VOLUNTEER, EDIT_VOLUNTEER,
} from '../actions';
import { now } from './helper';
import { defaultBusinesses, defaultVolunteers } from '../constant';

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

const businessFields = 7;
const volunteerFields = 4;

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
    businesses: (businesses = defaultBusinesses, action) => {
        switch (action.type) {
            case ADD_BUSINESS: {
                const id = Math.random();
                return [...businesses, { ...action, id }];
            }
            case DELETE_BUSINESS: {
                console.log('INSIDE DELETE REDUCER!!!');
                return [...businesses.filter(el => el.id !== action.id)];
            }
            case TOGGLE_HELP: {
                const updatedBusinesses = [...businesses];
                let index = null;
                for (let i = 0; i < updatedBusinesses.length; i += 1) {
                    if (updatedBusinesses[i].id === action.id) {
                        index = i;
                        break;
                    }
                }
                updatedBusinesses[index].needsHelp = !updatedBusinesses[index].needsHelp;
                return updatedBusinesses;
            }
            case EDIT_BUSINESS: {
                const editedBusinesses = [...businesses];
                const {
                    id, storeName, avatar, storeOwner, location, description,
                    needsHelp, tags,
                } = action;
                const properties = [storeName,
                    avatar,
                    storeOwner,
                    location,
                    description,
                    needsHelp,
                    tags];
                for (let i = 0; i < editedBusinesses.length; i += 1) {
                    if (editedBusinesses[i].id === id) {
                        for (let j = 0; j < businessFields; j += 1) {
                            editedBusinesses[i].properties[j] = properties[j];
                        }
                        break;
                    }
                }
                return editedBusinesses;
            }
            default:
                return businesses;
        }
    },
    volunteers: (volunteers = defaultVolunteers, action) => {
        switch (action.type) {
            case ADD_VOLUNTEER: {
                const {
                    volunteerName,
                    avatar,
                    description,
                    tags,
                } = action;
                const id = Math.random();
                return Object.assign([...volunteers], {
                    id,
                    volunteerName,
                    avatar,
                    description,
                    tags,
                });
            }
            case DELETE_VOLUNTEER: {
                const updatedVolunteers = [...volunteers];
                delete updatedVolunteers[action.id];
                return updatedVolunteers;
            }
            case EDIT_VOLUNTEER: {
                const editedVolunteers = [...volunteers];
                const {
                    id,
                    volunteerName,
                    avatar,
                    description,
                    tags,
                } = action;
                const properties = [
                    volunteerName,
                    avatar,
                    description,
                    tags,
                ];
                for (let i = 0; i < editedVolunteers.length; i += 1) {
                    if (editedVolunteers[i].id === id) {
                        for (let j = 0; j < volunteerFields; j += 1) {
                            editedVolunteers[i].properties[j] = properties[j];
                        }
                        break;
                    }
                }
                return editedVolunteers;
            }
            default:
                return volunteers;
        }
    },
});
