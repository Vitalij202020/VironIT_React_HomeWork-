import {User} from "../data";
import {EDIT_USER} from "../actions/types";

const initialState = {
    user: User,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case EDIT_USER:
            return {
                user: {...action.payload}
            };
        default:
            return state;
    }
}