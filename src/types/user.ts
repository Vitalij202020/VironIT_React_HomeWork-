export interface IUser {
    name: string,
    surname: string,
    age: number | string,
    email: string,
    role: string
}

export interface UserState {
    user: IUser,
    isLoading: boolean,
    isLogin: boolean,
}

export enum UserActionsTypes {
    EDIT_USER = 'EDIT_USER',
    SHOW_LOADER = 'SHOW_LOADER',
    HIDE_LOADER = 'HIDE_LOADER',
    SWITCH_ACCESS = 'SWITCH_ACCESS',
    CHANGE_ROLE = 'CHANGE_ROLE',
}

interface UserUpdateActions {
    type: UserActionsTypes.EDIT_USER
    payload: IUser
}

interface UserUpdateActions {
    type: UserActionsTypes.EDIT_USER
    payload: IUser
}

interface UserShowLoaderActions {
    type: UserActionsTypes.SHOW_LOADER
}

interface UserHideLoaderActions {
    type: UserActionsTypes.HIDE_LOADER
}

interface UserSwitchAccessActions {
    type: UserActionsTypes.SWITCH_ACCESS
}

interface UserChangeRoleActions {
    type: UserActionsTypes.CHANGE_ROLE
    payload: string
}


export type UserAction = UserUpdateActions | UserShowLoaderActions | UserHideLoaderActions | UserSwitchAccessActions | UserChangeRoleActions