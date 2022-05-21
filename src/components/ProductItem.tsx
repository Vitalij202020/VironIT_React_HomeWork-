import React, {FC} from 'react';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
    IconButton,
    Typography
} from "@mui/material";
import QrCodeIcon from '@mui/icons-material/QrCode';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {useLocation} from "react-router";
import {IProduct} from "../types/product";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";


const ProductItem: FC<IProduct> = ({id, price,  category, image, description, isCartAdded}) => {
    const {pathname} = useLocation()
    const {products} = useTypedSelector(state => state.products)
    const {deleteProduct, findProduct, switchUpdateOn, addProductToCart, switchIsCartAdded, increaseProductToCart, increaseRating} = useActions()

    const editProduct = (id: string) => {
        window.scrollTo(0, 0)
        switchUpdateOn()
        findProduct(id)
    }

    const addToCart = (id: string) => {
        const product = products.filter(product => product.id === id)[0]
        addProductToCart(product)
        increaseProductToCart(product.id)
        switchIsCartAdded(id)
        increaseRating(id)
    }

    return (
        <Grid item>
            <Card sx={{width: 345}}>
                <CardHeader
                    avatar={<QrCodeIcon/>}
                    title={category}
                />
                <CardMedia
                    component="img"
                    height="320"
                    image={image}
                    alt="image"
                />
                <CardContent>
                    <Typography variant="h6" align="center">{price}$</Typography>
                    <Typography variant="body2" color="text.secondary">{description.length > 35 ? description.slice(1, 35) + ' ...' : description}</Typography>
                </CardContent>
                <CardActions disableSpacing sx={{float: "right"}}>
                    <Button
                        disabled={isCartAdded}
                        sx={{mr: 2, display: pathname === '/admin' ? 'none' : 'block'}}
                        size="medium"
                        onClick={() => addToCart(id)}
                    >{isCartAdded ? 'Added To Cart' : 'Add to Cart'}</Button>
                    <IconButton
                        sx={{display: pathname === '/admin' ? 'block' : 'none'}}
                        aria-label="delete"
                        onClick={() => deleteProduct(id)}>
                        <DeleteIcon/>
                    </IconButton>
                    <IconButton
                        sx={{display: pathname === '/admin' ? 'block' : 'none'}}
                        aria-label="edit"
                        onClick={() => editProduct(id)}>
                        <EditIcon/>
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default ProductItem;