import {EDIT_USER} from './types'

export const editUser = (updatedUser) => {
    return {type: EDIT_USER, payload: updatedUser}
}



