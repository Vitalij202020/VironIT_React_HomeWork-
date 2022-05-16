import {EDIT_USER, HIDE_LOADER, SHOW_LOADER, SWITCH_ACCESS} from './types'

export const editUser = (updatedUser) => {
    return {type: EDIT_USER, payload: updatedUser}
}

export const showLoader = () => {
    return {type: SHOW_LOADER}
}

export const hideLoader = () => {
    return {type: HIDE_LOADER}
}

export const switchAccess = () => {
    return {type: SWITCH_ACCESS}
}





