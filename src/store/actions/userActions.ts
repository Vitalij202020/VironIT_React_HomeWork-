import {IUser, UserAction, UserActionsTypes} from "../../types/user";


export const editUser = (updatedUser: IUser): UserAction => {
    return {type: UserActionsTypes.EDIT_USER, payload: updatedUser}
}

export const showLoader = (): UserAction => {
    return {type: UserActionsTypes.SHOW_LOADER}
}

export const hideLoader = (): UserAction => {
    return {type: UserActionsTypes.HIDE_LOADER}
}

export const switchAccess = (): UserAction => {
    return {type: UserActionsTypes.SWITCH_ACCESS}
}

export const changeRole = (role: string): UserAction => {
    return {type: UserActionsTypes.CHANGE_ROLE, payload: role}
}






