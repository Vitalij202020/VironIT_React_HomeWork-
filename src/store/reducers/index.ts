import { combineReducers } from 'redux';
import {userReducer} from "./userReducer";
import {productReducer} from "./productReducer";
import {cartReducer} from "./cartReducer";


export const rootReducer = combineReducers({
    products: productReducer,
    user: userReducer,
    cart: cartReducer
});

export type RootState = ReturnType<typeof rootReducer>