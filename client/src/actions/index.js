export const PUSH_MESSAGE = 'PUSH_MESSAGE';
export const SET_CONVERSATION = 'SET_CONVERSATION';

export const push = (uid, iid, message) => ({
    type: PUSH_MESSAGE,
    uid,
    iid,
    message,
});

export const setConversation = (id) => ({
    type: SET_CONVERSATION,
    id,
})
