import React from 'react';
import {Container, InputAdornment, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ProductList from "../components/ProductList";
import {useDispatch} from "react-redux";
import {searchOnChange} from "../actions/productActions";

const UserPart = () => {
    const dispatch = useDispatch()
    return (
        <Container>
            <TextField
                onChange={(e) => dispatch(searchOnChange(e.target.value))}
                variant="outlined"
                placeholder={'Search..'}
                margin="normal"
                fullWidth
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
            <ProductList/>
        </Container>
    );
};

export default UserPart;