import {IProduct, IProductUpdate, ProductAction, ProductActionTypes} from "../../types/product";


export const addProduct = (newProduct: IProduct): ProductAction => {
    return {type: ProductActionTypes.ADD_PRODUCT, payload: newProduct}
}

export const deleteProduct = (id: string): ProductAction => {
    return {type: ProductActionTypes.DELETE_PRODUCT, payload: id}
}

export const switchUpdateOn = (): ProductAction => {
    return {type: ProductActionTypes.SWITCH_UPDATE_ON}
}

export const switchUpdateOff = (): ProductAction => {
    return {type: ProductActionTypes.SWITCH_UPDATE_OFF}
}

export const clearFields = (): ProductAction => {
    return {type: ProductActionTypes.CLEAR_FIELDS}
}

export const sortByMore = (): ProductAction => {
    return {type: ProductActionTypes.SORT_BY_MORE}
}

export const sortByLess = (): ProductAction => {
    return {type: ProductActionTypes.SORT_BY_LESS}
}

export const increaseRating = (id: string): ProductAction => {
    return {type: ProductActionTypes.INCREASE_RATING, payload: id}
}

export const findProduct = (id: string): ProductAction => {
    return {type: ProductActionTypes.FIND_PRODUCT, payload: id}
}

export const addManyProducts = (products: IProduct[]): ProductAction => {
    return {type: ProductActionTypes.ADD_MANY_PRODUCTS, payload: products}
}

export const editProduct = (id: string, updatedProduct: IProductUpdate): ProductAction => {
    return {type: ProductActionTypes.UPDATE_PRODUCT, payload: id, body: updatedProduct}
}

export const searchOnChange = (value: string): ProductAction => {
    return {type: ProductActionTypes.SEARCH_INPUT_VALUE, payload: value}
}

export const switchIsCartAdded = (id: string): ProductAction => {
    return {type: ProductActionTypes.SWITCH_IS_CARD_ADDED, payload: id}
}