import React, {useEffect, useState} from 'react';
import {Box, Button, Container, styled, TextField, Typography} from "@mui/material";
import { v4 as uuidv4 } from 'uuid';
import {useDispatch, useSelector} from "react-redux";
import {addProduct, clearFields, editProduct, switchUpdateOff} from "../actions/productActions";

const StyledTextField = styled(TextField)({
    marginTop: 10,
    marginBottom: 10,
    display: 'block'
})

const ProductForm = () => {
    const [name, setName] = useState('')
    const [img, setImg] = useState('')
    const [desc, setDesc] = useState('')

    const {isUpdating} = useSelector(state => state.products)
    const {product} = useSelector(state => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        setName(product.name)
        setImg(product.img)
        setDesc(product.desc)
    }, [product])

    const createProduct = (e) => {
        e.preventDefault()
        const newProduct = {
            id: uuidv4(),
            name: name || 'unknown',
            img: img || 'https://e-stock.by/image/cache/photos/i06af1c7c0-650x650.jpg',
            desc: desc || 'unknown',
        }
        dispatch(addProduct(newProduct))
    }

    const updateProduct = (e) => {
        e.preventDefault()
        const updatedProduct = {
            name: name || 'unknown',
            img: img || 'https://e-stock.by/image/cache/photos/i06af1c7c0-650x650.jpg',
            desc: desc || 'unknown',
        }
        dispatch(editProduct(product.id, updatedProduct))
        dispatch(switchUpdateOff())
        dispatch(clearFields())
    }

    return (
        <Container size="sm">
            <Typography
                sx={{marginTop: "15px"}}
                textAlign={"center"}
                variant="h6"
                color="textSecondary"
                component="h2"
                gutterBottom
            >
                {isUpdating ? 'Update the Product' : 'Create a New Product'}
            </Typography>

            <form noValidate autoComplete="off" onSubmit={(e) => isUpdating ? updateProduct(e) : createProduct(e)}>
                <StyledTextField
                    onChange={(e) => setName(e.target.value)}
                    label="Product Name"
                    placeholder="brand"
                    variant="outlined"
                    value={name}
                    fullWidth
                />
                <StyledTextField
                    onChange={(e) => setImg(e.target.value)}
                    label="Img Address"
                    variant="outlined"
                    placeholder="https://example"
                    value={img}
                    fullWidth
                />
                <StyledTextField
                    onChange={(e) => setDesc(e.target.value)}
                    label="Details"
                    variant="outlined"
                    placeholder="description"
                    value={desc}
                    multiline
                    rows={4}
                    fullWidth
                />
                <Box sx={{float: "right"}}>
                    <Button
                        type="submit"
                        variant="contained"
                    >
                        Submit
                    </Button>
                </Box>
            </form>

        </Container>
    );
};

export default ProductForm;