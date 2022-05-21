import {addManyProducts} from "../store/actions/productActions";
import {hideLoader, showLoader} from "../store/actions/userActions";
import {Dispatch} from "redux";
import {UserAction} from "../types/user";
import {ProductAction} from "../types/product";

export const fetchProducts = () => (dispatch: Dispatch<UserAction | ProductAction>) => {
    dispatch(showLoader())
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
            const data = json.map((item: any) => (
                {
                    id: item.id,
                    price: item.price,
                    category: item.category,
                    image: item.image,
                    description: item.description,
                    isCartAdded: false,
                    count: 0,
                    rating: 0
                }
            ))
            dispatch(addManyProducts(data))
            dispatch(hideLoader())
        })
}