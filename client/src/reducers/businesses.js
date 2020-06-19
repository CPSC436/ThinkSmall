import { ADD_BUSINESS, DELETE_BUSINESS, EDIT_BUSINESS, TOGGLE_HELP } from '../actions';
import { defaultBusinesses } from '../constant';

const businessFields = 7;

export default (businesses = defaultBusinesses, action) => {
    switch (action.type) {
        case ADD_BUSINESS: {
            const id = Math.random();
            return [...businesses, { ...action, id }];
        }
        case DELETE_BUSINESS: {
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
};
