export interface IProduct {
    id: string
    price: number
    category: string
    image: string
    description: string
    isCartAdded: boolean
    count: number
    rating: number
}

export interface IProductUpdate {
    id: string
    category: string
    image: string
    description: string
}

export interface ProductState {
    products: IProduct[]
    product: IProductUpdate
    isUpdating: boolean
    searchInputValue: string
}

export enum ProductActionTypes {
    ADD_PRODUCT = 'ADD_PRODUCT',
    DELETE_PRODUCT = 'DELETE_PRODUCT',
    UPDATE_PRODUCT = 'UPDATE_PRODUCT',
    FIND_PRODUCT = 'FIND_PRODUCT',
    SWITCH_UPDATE_ON = 'SWITCH_UPDATE_ON',
    SWITCH_UPDATE_OFF = 'SWITCH_UPDATE_OFF',
    CLEAR_FIELDS = 'CLEAR_FIELDS',
    SEARCH_INPUT_VALUE = 'SEARCH_INPUT_VALUE',
    ADD_MANY_PRODUCTS = 'ADD_MANY_PRODUCTS',
    SWITCH_IS_CARD_ADDED = 'SWITCH_IS_CARD_ADDED',
    SORT_BY_MORE = 'SORT_BY_MORE',
    SORT_BY_LESS = 'SORT_BY_LESS',
    INCREASE_RATING = 'INCREASE_RATING'
}

interface ProductAddActions {
    type: ProductActionTypes.ADD_PRODUCT
    payload: IProduct
}

interface ProductDeleteActions {
    type: ProductActionTypes.DELETE_PRODUCT
    payload: string
}

interface SwitchIsCartAddedActions {
    type: ProductActionTypes.SWITCH_IS_CARD_ADDED
    payload: string
}

interface ProductSwitchUpdateOnActions {
    type: ProductActionTypes.SWITCH_UPDATE_ON
}

interface ProductIncreaseRatingActions {
    type: ProductActionTypes.INCREASE_RATING
    payload: string
}

interface ProductSwitchUpdateOffActions {
    type: ProductActionTypes.SWITCH_UPDATE_OFF
}

interface ProductSortMoreActions {
    type: ProductActionTypes.SORT_BY_MORE
}

interface ProductSortLessActions {
    type: ProductActionTypes.SORT_BY_LESS
}

interface ProductClearFieldsActions {
    type: ProductActionTypes.CLEAR_FIELDS
}

interface ProductFindOneActions {
    type: ProductActionTypes.FIND_PRODUCT
    payload: string
}

interface ProductAddManyActions {
    type: ProductActionTypes.ADD_MANY_PRODUCTS
    payload: IProduct[]
}

interface ProductDeleterActions {
    type: ProductActionTypes.UPDATE_PRODUCT
    payload: string
    body: IProductUpdate
}

interface ProductSearchActions {
    type: ProductActionTypes.SEARCH_INPUT_VALUE
    payload: string
}

export type ProductAction =
    ProductAddActions
    | ProductDeleteActions
    | ProductSwitchUpdateOnActions
    | ProductSwitchUpdateOffActions
    | ProductClearFieldsActions
    | ProductFindOneActions
    | ProductAddManyActions
    | ProductDeleterActions
    | ProductSearchActions
    | SwitchIsCartAddedActions
    | ProductSortMoreActions
    | ProductSortLessActions
    | ProductIncreaseRatingActions