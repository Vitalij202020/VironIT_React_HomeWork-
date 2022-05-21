import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useTypedSelector} from "../hooks/useTypedSelector";


export default function CartOutInfo() {
    const {products} = useTypedSelector(state => state.cart)
    const totalPrice = products.reduce((accum, current): number => accum + current.price * current.count, 0)

    return (
        <Card sx={{ minWidth: 300 }}>
            <CardContent>
                <Typography align='center' variant="h5" component="div">
                    ORDER SUMMARY
                </Typography>
                <br />
               <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                   <Typography>Subtotal</Typography>
                   <Typography>{totalPrice} $</Typography>
               </Box>
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Typography>Tax</Typography>
                    <Typography>free</Typography>
                </Box>
                <br />
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Typography variant='h6'>Total</Typography>
                    <Typography variant='h6'>{totalPrice} $</Typography>
                </Box>
            </CardContent>
            <CardActions sx={{float: 'right'}}>
                <Button size="small">Check Out</Button>
            </CardActions>
        </Card>
    );
}
