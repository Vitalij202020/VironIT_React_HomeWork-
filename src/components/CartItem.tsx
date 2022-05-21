import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import {IconButton} from "@mui/material";
import {FC} from "react";
import {IProduct} from "../types/product";
import {useActions} from "../hooks/useActions";


const CartItem: FC<IProduct> = ({id, price,  category, image, description, count}) => {
    const {increaseProductToCart, decreaseProductToCart, deleteProductToCart, switchIsCartAdded} = useActions()


    const increaseProduct = (id: string) => {
        increaseProductToCart(id)
    }

    const decreaseProduct = (id: string) => {
        if (count === 1) {
            deleteProductToCart(id)
            switchIsCartAdded(id)
        }
        decreaseProductToCart(id)
    }

    return (
        <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', }}>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={image}
                    alt="Goods"
                />
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h6">
                        <strong>Category:</strong> {category}
                    </Typography>
                    <Typography component="div" variant="subtitle2">
                        <strong>ID:</strong> {id}
                    </Typography>
                    <Typography maxWidth='700px' variant="subtitle1" color="text.secondary" component="div">
                        {description}
                    </Typography>
                </CardContent>

            </Box>
            <Box sx={{width: '100%', display: 'flex', justifyContent: 'end', mr:3}}>
                <Box sx={{
                    m: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Box sx={{display: 'flex', alignItems: 'center', mb: 1}}>
                        <IconButton
                            color="primary"
                            aria-label="add to shopping cart"
                            onClick={() => decreaseProduct(id)}
                        >
                            <Icon color="primary">remove_circle</Icon>
                        </IconButton>
                        <Typography variant='h6'>{count}</Typography>
                        <IconButton
                            color="primary"
                            aria-label="add to shopping cart"
                            onClick={() => increaseProduct(id)}
                        >
                            <Icon color="primary">add_circle</Icon>
                        </IconButton>
                    </Box>
                    <Box>
                        <Typography variant='h6'>$ {price}</Typography>
                    </Box>
                </Box>

            </Box>
        </Card>
    );
};

export default CartItem;