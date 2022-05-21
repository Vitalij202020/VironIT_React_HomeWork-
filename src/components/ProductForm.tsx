import React, {useEffect, useState} from 'react';
import {Box, Button, Container, styled, TextField, Typography} from "@mui/material";
import { v4 as uuidv4 } from 'uuid';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const StyledTextField = styled(TextField)({
    marginTop: 10,
    marginBottom: 10,
    display: 'block'
})

const ProductForm = () => {
    const [category, setCategory] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')

    const {isUpdating, product} = useTypedSelector(state => state.products)
    const {addProduct, clearFields, editProduct, switchUpdateOff} = useActions()

    useEffect(() => {
        setCategory(product.category)
        setImage(product.image)
        setDescription(product.description)
    }, [product])

    const createProduct = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newProduct = {
            id: uuidv4(),
            price,
            category: category || 'unknown',
            image: image || 'https://e-stock.by/image/cache/photos/i06af1c7c0-650x650.jpg',
            description: description || 'unknown',
            isCartAdded: false,
            count: 0,
            rating: 0
        }
        addProduct(newProduct)
    }

    const updateProduct = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const updatedProduct = {
            id: product.id,
            category: category || 'unknown',
            image: image || 'https://e-stock.by/image/cache/photos/i06af1c7c0-650x650.jpg',
            description: description || 'unknown',
        }
        editProduct(product.id, updatedProduct)
        switchUpdateOff()
        clearFields()
    }

    return (
        <Container>
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
                    placeholder="category"
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
                    onChange={(e) => setPrice(parseInt(e.target.value))}
                    label="Price"
                    variant="outlined"
                    placeholder="$"
                    value={price ? price : ''}
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