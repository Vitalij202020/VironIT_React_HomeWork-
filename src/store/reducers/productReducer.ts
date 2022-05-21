import {Products} from "../../data";
import {ProductAction, ProductActionTypes, ProductState} from "../../types/product";


const initialState: ProductState = {
    products: [...Products],
    product: {id: '', category: '', image: '', description: ''},
    isUpdating: false,
    searchInputValue: ''
};

export const productReducer =  (state = initialState, action: ProductAction): ProductState => {
    switch (action.type) {
        case ProductActionTypes.ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload]
            };
        case ProductActionTypes.ADD_MANY_PRODUCTS:
            return {
                ...state,
                products: [...state.products, ...action.payload]
            };
        case ProductActionTypes.SWITCH_UPDATE_ON:
            return {
                ...state,
                isUpdating: true
            };
        case ProductActionTypes.SWITCH_UPDATE_OFF:
            return {
                ...state,
                isUpdating: false
            };
        case ProductActionTypes.SEARCH_INPUT_VALUE:
            return {
                ...state,
                searchInputValue: action.payload
            };
        case ProductActionTypes.CLEAR_FIELDS:
            return {
                ...state,
                product: {id: '', category: '', image: '', description: ''}
            };
        case ProductActionTypes.FIND_PRODUCT:
            return {
                ...state,
                product: state.products.filter(product => product.id === action.payload)[0]
            };
        case ProductActionTypes.UPDATE_PRODUCT:
            return {
                ...state,
                products: state.products.map(product => product.id === action.payload  ? {...product, category: action.body.category, img: action.body.image, desc: action.body.description} : product)
            };
        case ProductActionTypes.INCREASE_RATING:
            return {
                ...state,
                products: state.products.map(item => item.id === action.payload ? {...item, rating: item.rating + 1} : item)
            };
        case ProductActionTypes.DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload)
            };
        case ProductActionTypes.SWITCH_IS_CARD_ADDED:
            return {
                ...state,
                products: state.products.map(product => product.id === action.payload ? {...product, isCartAdded: !product.isCartAdded} : product)
            };
        case ProductActionTypes.SORT_BY_MORE:
            return {
                ...state,
                products: state.products.sort((a, b) => a.rating - b.rating)
            };
        case ProductActionTypes.SORT_BY_LESS:
            return {
                ...state,
                products: state.products.sort((a, b) => a.rating - b.rating).reverse()
            };
        default:
            return state;
    }
}