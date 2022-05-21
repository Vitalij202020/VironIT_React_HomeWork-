import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import CartItemList from "../components/CartItemList";
import CartOutInfo from "../components/CartOutInfo";

const CartPage = () => {
    return (
        <Container>
            <Typography variant='h4' align='center' sx={{m: 3}}>Your Shopping Cart</Typography>
            <Box sx={{display: 'flex', justifyContent: 'center', m: 2}}>
                <CartOutInfo/>
            </Box>
            <CartItemList/>
        </Container>
    );
};

export default CartPage;