import { combineReducers } from 'redux';
import businesses from './businesses';
import volunteers from './volunteers';
import conversation from './conversation';
import conversations from './conversations';
import forms from './forms';
import requests from './requests';
import users from './users';

const defaultSwitchState = false;

export default combineReducers({
    businesses,
    volunteers,
    conversation,
    conversations,
    forms,
    requests,
    switchView: (switchState = defaultSwitchState, action) => {
        switch (action.type) {
            case SWITCH_VIEW:
                return !switchState;
            default:
                return switchState;
        }
    },
    users,
});
