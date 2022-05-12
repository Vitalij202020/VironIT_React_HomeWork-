import {addManyProducts} from "../actions/productActions";

export const fetchProducts = () => (dispatch) => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {dispatch(addManyProducts(json))})
}