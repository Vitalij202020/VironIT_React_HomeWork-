import {CartAction, CartActionsTypes, CartState} from "../../types/cart";

const initialState: CartState = {
    products: []
};

export const cartReducer = (state = initialState, action: CartAction): CartState => {
    switch (action.type) {
        case CartActionsTypes.ADD_PRODUCT_TO_CART:
            return {
                ...state,
                products: [...state.products, action.payload]
            };
        case CartActionsTypes.INCREASE_COUNT:
            return {
                ...state,
                products: state.products.map(item => item.id === action.payload ? {...item, count: item.count + 1} : item)
            };
        case CartActionsTypes.DECREASE_COUNT:
            return {
                ...state,
                products: state.products.map(item => item.id === action.payload ? {...item, count: item.count - 1} : item)
            };
        case CartActionsTypes.DELETE_ITEM:
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload)
            };
        default:
            return state;
    }
}