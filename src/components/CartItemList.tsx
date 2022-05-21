import React from 'react';
import CartItem from "./CartItem";
import {Stack} from "@mui/material";
import {useTypedSelector} from "../hooks/useTypedSelector";

const CartItemList = () => {
    const {products} = useTypedSelector(state => state.cart)

    return (
        <Stack spacing={2}>
            {products.map(product => (
            <CartItem
                key={product.id}
                {...product}
            />
            ))}
        </Stack>
    );
};

export default CartItemList;