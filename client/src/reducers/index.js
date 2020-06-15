import { combineReducers } from 'redux';
import {
    PUSH_MESSAGE,
    SET_CONVERSATION, SWITCH_VIEW,
    ADD_BUSINESS, DELETE_BUSINESS, EDIT_BUSINESS,
    ADD_VOLUNTEER, DELETE_VOLUNTEER, EDIT_VOLUNTEER,
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
    businesses: (businesses = defaultBusinesses, action) => {
        switch (action.type) {
            case ADD_BUSINESS: {
                const {
                    storeName, avatar, storeOwner, location, description,
                    needsHelp, tags,
                } = action;
                const id = Math.random();
                return Object.assign([...businesses], {
                    id,
                    storeName,
                    avatar,
                    storeOwner,
                    location,
                    description,
                    needsHelp,
                    tags,
                });
            }
            case DELETE_BUSINESS: {
                const updatedBusinesses = [...businesses];
                delete updatedBusinesses[action.id];
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
                for (let i = 0; i < editedBusinesses.length; i++) {
                    if (editedBusinesses[i].id === id) {
                        for (let j = 0; j < 7; j++) {
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
                for (let i = 0; i < editedVolunteers.length; i++) {
                    if (editedVolunteers[i].id === id) {
                        for (let j = 0; j < 4; j++) {
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
