import React from 'react';
import ProductItem from "./ProductItem";
import {Grid} from "@mui/material";
import {useSelector} from "react-redux";


const ProductList = () => {
    const {products} = useSelector(state => state.products)
    const {searchInputValue} = useSelector(state => state.products)

    return (
        <Grid container spacing={3} justifyContent={"center"} alignItems={"center"} sx={{marginTop: "10px"}}>
            {products.filter((item) => {
                if (searchInputValue === "") {
                    return item
                } else if (item.desc.toLowerCase().includes(searchInputValue.toLowerCase())) {
                    return item
                }
            }).map(product => (
                <ProductItem
                    key={product.id}
                    {...product}
                />
            ))}
        </Grid>
    );
};

export default ProductList;