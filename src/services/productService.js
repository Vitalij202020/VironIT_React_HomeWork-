import {addManyProducts} from "../actions/productActions";
import {hideLoader, showLoader} from "../actions/userActions";

export const fetchProducts = () => (dispatch) => {
    dispatch(showLoader())
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
            dispatch(addManyProducts(json))
            dispatch(hideLoader())
        })
}