import { ADD_BUSINESS, DELETE_BUSINESS, EDIT_BUSINESS } from '../actions';
import { defaultBusinesses } from '../constant';

export default (businesses = defaultBusinesses, action) => {
    switch (action.type) {
        case ADD_BUSINESS: {
            const id = Math.random();
            return [...businesses, { ...action, id }];
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
            for (let i = 0; i < editedBusinesses.length; i += 1) {
                if (editedBusinesses[i].id === id) {
                    for (let j = 0; j < 7; j += 1) {
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
};
