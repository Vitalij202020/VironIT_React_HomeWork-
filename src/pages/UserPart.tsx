import React from 'react';
import {Container, InputAdornment, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ProductList from "../components/ProductList";
import {Loader} from "../components/Loader";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const UserPart = () => {
    const {isLoading} = useTypedSelector(state => state.user)
    const {searchOnChange} = useActions()

    return (
        <Container>
            <TextField
                onChange={(e) => searchOnChange(e.target.value)}
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