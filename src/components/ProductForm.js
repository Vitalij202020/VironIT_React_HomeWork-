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
    const [category, setCategory] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')

    const {isUpdating} = useSelector(state => state.products)
    const {product} = useSelector(state => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        setCategory(product.category)
        setImage(product.image)
        setDescription(product.description)
    }, [product])

    const createProduct = (e) => {
        e.preventDefault()
        const newProduct = {
            id: uuidv4(),
            category: category || 'unknown',
            image: image || 'https://e-stock.by/image/cache/photos/i06af1c7c0-650x650.jpg',
            description: description || 'unknown',
        }
        dispatch(addProduct(newProduct))
    }

    const updateProduct = (e) => {
        e.preventDefault()
        const updatedProduct = {
            category: category || 'unknown',
            image: image || 'https://e-stock.by/image/cache/photos/i06af1c7c0-650x650.jpg',
            description: description || 'unknown',
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
                {isUpdating ? 'Edit the Product' : 'Create a New Product'}
            </Typography>

            <form noValidate autoComplete="off" onSubmit={(e) => isUpdating ? updateProduct(e) : createProduct(e)}>
                <StyledTextField
                    onChange={(e) => setCategory(e.target.value)}
                    label="Product Name"
                    placeholder="brand"
                    variant="outlined"
                    value={category}
                    fullWidth
                />
                <StyledTextField
                    onChange={(e) => setImage(e.target.value)}
                    label="Img Address"
                    variant="outlined"
                    placeholder="https://example"
                    value={image}
                    fullWidth
                />
                <StyledTextField
                    onChange={(e) => setDescription(e.target.value)}
                    label="Details"
                    variant="outlined"
                    placeholder="description"
                    value={description}
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