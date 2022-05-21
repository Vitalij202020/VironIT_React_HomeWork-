import {User} from "../../data";
import {UserAction, UserActionsTypes, UserState} from "../../types/user";

const initialState: UserState = {
    user: User,
    isLoading: false,
    isLogin: true,
};

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionsTypes.EDIT_USER:
            return {
                ...state,
                user: {...action.payload}
            };
        case UserActionsTypes.CHANGE_ROLE:
            return {
                ...state,
                user: {...state.user, role: action.payload}
            };
        case UserActionsTypes.SHOW_LOADER:
            return {
                ...state,
                isLoading: true
            };
        case UserActionsTypes.HIDE_LOADER:
            return {
                ...state,
                isLoading: false
            };
        case UserActionsTypes.SWITCH_ACCESS:
            return {
                ...state,
                isLogin: !state.isLogin
            };
        default:
            return state;
    }
}