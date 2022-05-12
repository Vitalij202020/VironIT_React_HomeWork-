import React from 'react';
import {Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography} from "@mui/material";
import QrCodeIcon from '@mui/icons-material/QrCode';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {useLocation} from "react-router";
import {useDispatch} from "react-redux";
import {deleteProduct, findProduct, switchUpdateOn} from "../actions/productActions";


const ProductItem = ({id, category, image, description}) => {
    const {pathname} = useLocation()
    const dispatch = useDispatch()

    const editProduct = (id) => {
        window.scrollTo(0, 0)
        dispatch(switchUpdateOn())
        dispatch(findProduct(id))
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
                <CardContent sx={{height: "54px", overflow: "hidden"}}>
                    <Typography variant="body2" color="text.secondary">{description}</Typography>
                </CardContent>
                <CardActions disableSpacing sx={{display: pathname === '/admin' ? 'block' : 'none', float: "right"}}>
                    <IconButton aria-label="delete" onClick={() => dispatch(deleteProduct(id))}>
                        <DeleteIcon/>
                    </IconButton>
                    <IconButton aria-label="edit" onClick={() => editProduct(id)}>
                        <EditIcon/>
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default ProductItem;