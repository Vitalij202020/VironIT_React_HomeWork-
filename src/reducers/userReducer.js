import {User} from "../data";
import {EDIT_USER, HIDE_LOADER, SHOW_LOADER, SWITCH_ACCESS} from "../actions/types";

const initialState = {
    user: User,
    isLoading: false,
    isLogin: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case EDIT_USER:
            return {
                ...state,
                user: {...action.payload}
            };
        case SHOW_LOADER:
            return {
                ...state,
                isLoading: true
            };
        case HIDE_LOADER:
            return {
                ...state,
                isLoading: false
            };
        case SWITCH_ACCESS:
            return {
                ...state,
                isLogin: !state.isLogin
            };
        default:
            return state;
    }
}