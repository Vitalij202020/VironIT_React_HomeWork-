import React from 'react';
import ProductForm from "../components/ProductForm";
import {Container} from "@mui/material";
import ProductList from "../components/ProductList";

const AdminPart = () => {

    return (
        <Container>
            <ProductForm/>
            <ProductList/>
        </Container>
    );
};

export default AdminPart;