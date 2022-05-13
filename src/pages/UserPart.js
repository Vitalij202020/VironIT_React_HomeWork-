import React from 'react';
import {Container, InputAdornment, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ProductList from "../components/ProductList";
import {useDispatch, useSelector} from "react-redux";
import {searchOnChange} from "../actions/productActions";
import {Loader} from "../components/Loader";

const UserPart = () => {
    const {isLoading} = useSelector(state => state.user)
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
            {isLoading ? <Loader/> : <ProductList/>}
        </Container>
    );
};

export default UserPart;