import {
    ADD_PRODUCT,
    DELETE_PRODUCT,
    UPDATE_PRODUCT,
    FIND_PRODUCT,
    SWITCH_UPDATE_ON,
    SWITCH_UPDATE_OFF,
    CLEAR_FIELDS,
    SEARCH_INPUT_VALUE, ADD_MANY_PRODUCTS
} from './types'


export const addProduct = (newProduct) => {
    return {type: ADD_PRODUCT, payload: newProduct}
}

export const deleteProduct = (id) => {
    return {type: DELETE_PRODUCT, payload: id}
}

export const switchUpdateOn = () => {
    return {type: SWITCH_UPDATE_ON}
}

export const switchUpdateOff = () => {
    return {type: SWITCH_UPDATE_OFF}
}

export const clearFields = () => {
    return {type: CLEAR_FIELDS}
}

export const findProduct = (id) => {
    return {type: FIND_PRODUCT, payload: id}
}

export const addManyProducts = (products) => {
    return {type: ADD_MANY_PRODUCTS, payload: products}
}

export const editProduct = (id, updatedProduct) => {
    return {type: UPDATE_PRODUCT, payload: id, body: updatedProduct}
}

export const searchOnChange = (value) => {
    return {type: SEARCH_INPUT_VALUE, payload: value}
}