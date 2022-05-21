import React, {useEffect} from 'react';
import ProductItem from "./ProductItem";
import {Grid} from "@mui/material";
import {useTypedSelector} from "../hooks/useTypedSelector";


const ProductList = () => {
    const {products, searchInputValue} = useTypedSelector(state => state.products)

    return (
        <Grid container spacing={3} justifyContent={"center"} alignItems={"center"} sx={{marginTop: "10px"}}>
            {products.filter((item) => {
                if (searchInputValue === "") {
                    return item
                } else if (item.description.toLowerCase().includes(searchInputValue.toLowerCase())) {
                    return item
                }
            }).map(product => (
                <ProductItem
                    key={product.id}
                    {...product}
                />
            )).reverse()}
        </Grid>
    );
};

export default ProductList;