import React from 'react';
import ProductForm from "../components/ProductForm";
import {Container} from "@mui/material";
import ProductList from "../components/ProductList";
import {Loader} from "../components/Loader";
import {useTypedSelector} from "../hooks/useTypedSelector";
import MySelect from "../components/MySelect";

const AdminPart = () => {
    const {isLoading} = useTypedSelector(state => state.user)

    return (
        <Container>
            <ProductForm/>
            <MySelect/>
            {isLoading ? <Loader/> : <ProductList/>}
        </Container>
    );
};

export default AdminPart;