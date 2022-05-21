import {IProduct} from "./product";


export interface CartState {
    products: IProduct[]
}

export enum CartActionsTypes {
    ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART',
    INCREASE_COUNT = 'INCREASE_COUNT',
    DECREASE_COUNT = 'DECREASE_COUNT',
    DELETE_ITEM = 'DELETE_ITEM'
}

interface CartAddProductAction {
    type: CartActionsTypes.ADD_PRODUCT_TO_CART
    payload: IProduct
}

interface CartIncreaseProductAction {
    type: CartActionsTypes.INCREASE_COUNT
    payload: string
}

interface CartDecreaseProductAction {
    type: CartActionsTypes.DECREASE_COUNT
    payload: string
}

interface CartDeleteProductAction {
    type: CartActionsTypes.DELETE_ITEM
    payload: string
}

export type CartAction = CartAddProductAction | CartIncreaseProductAction | CartDecreaseProductAction | CartDeleteProductAction