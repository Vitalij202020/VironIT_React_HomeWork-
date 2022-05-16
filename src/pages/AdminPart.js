import React from 'react';
import ProductForm from "../components/ProductForm";
import {Container} from "@mui/material";
import ProductList from "../components/ProductList";
import {Loader} from "../components/Loader";
import {useSelector} from "react-redux";

const AdminPart = () => {
    const {isLoading} = useSelector(state => state.user)

    return (
        <Container>
            <ProductForm/>
            {isLoading ? <Loader/> : <ProductList/>}
        </Container>
    );
};

export default AdminPart;