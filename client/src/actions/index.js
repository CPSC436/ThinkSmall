export const PUSH_MESSAGE = 'PUSH_MESSAGE';
export const SET_CONVERSATION = 'SET_CONVERSATION';
export const SWITCH_VIEW = 'SWITCH_VIEW';
export const ADD_BUSINESS = 'ADD_BUSINESS';
export const DELETE_BUSINESS = 'DELETE_BUSINESS';
export const EDIT_BUSINESS = 'EDIT_BUSINESS';

export const push = (uid, iid, message) => ({
    type: PUSH_MESSAGE,
    uid,
    iid,
    message,
});

export const setConversation = id => ({
    type: SET_CONVERSATION,
    id,
});

export const switchView = () => ({
    type: SWITCH_VIEW,
});

export const addBusiness = (storeName, avatar, storeOwner, location, description,
    needsHelp, tags) => ({
        type: ADD_BUSINESS,
        storeName,
        avatar,
        storeOwner,
        location,
        description,
        needsHelp,
        tags,
    });

export const deleteBusiness = id => ({
    type: DELETE_BUSINESS,
    id,
});

export const editBusiness = (id, storeName, avatar, storeOwner, location, description,
    needsHelp, tags) => ({
        type: EDIT_BUSINESS,
        id,
        storeName,
        avatar,
        storeOwner,
        location,
        description,
        needsHelp,
        tags,
    });
