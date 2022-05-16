import {Products} from "../data";
import {
    ADD_PRODUCT,
    DELETE_PRODUCT,
    UPDATE_PRODUCT,
    FIND_PRODUCT,
    SWITCH_UPDATE_ON,
    SWITCH_UPDATE_OFF,
    CLEAR_FIELDS,
    SEARCH_INPUT_VALUE, ADD_MANY_PRODUCTS
} from "../actions/types";

const initialState = {
    products: [...Products],
    product: { category: '', image: '', description: ''},
    isUpdating: false,
    searchInputValue: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload]
            };
        case ADD_MANY_PRODUCTS:
            return {
                ...state,
                products: [...state.products, ...action.payload]
            };
        case SWITCH_UPDATE_ON:
            return {
                ...state,
                isUpdating: true
            };
        case SWITCH_UPDATE_OFF:
            return {
                ...state,
                isUpdating: false
            };
        case SEARCH_INPUT_VALUE:
            return {
                ...state,
                searchInputValue: action.payload
            };
        case CLEAR_FIELDS:
            return {
                ...state,
                product: { category: '', image: '', description: ''}
            };
        case FIND_PRODUCT:
            return {
                ...state,
                product: state.products.filter(product => product.id === action.payload)[0]
            };
        case UPDATE_PRODUCT:
            return {
                ...state,
                products: state.products.map(product => product.id === action.payload  ? {...product, category: action.body.category, img: action.body.image, desc: action.body.description} : product)
            };
        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload)
            };
        default:
            return state;
    }
}