import {IProduct} from "../../types/product";
import {CartAction, CartActionsTypes} from "../../types/cart";


export const addProductToCart = (Product: IProduct): CartAction => {
    return {type: CartActionsTypes.ADD_PRODUCT_TO_CART, payload: Product}
}

export const increaseProductToCart = (id: string): CartAction => {
    return {type: CartActionsTypes.INCREASE_COUNT, payload: id}
}

export const decreaseProductToCart = (id: string): CartAction => {
    return {type: CartActionsTypes.DECREASE_COUNT, payload: id}
}

export const deleteProductToCart = (id: string): CartAction => {
    return {type: CartActionsTypes.DELETE_ITEM, payload: id}
}