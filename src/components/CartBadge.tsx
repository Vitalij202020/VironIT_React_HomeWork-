import * as React from 'react';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

export default function CartBadge() {
    const {products} = useTypedSelector(state => state.cart)

    return (
        <IconButton aria-label="cart" >
            <Link to={'/cart'}>
                <StyledBadge badgeContent={products.length > 0 ? products.length : null} color="warning">
                    <ShoppingCartIcon sx={{color: 'white'}}/>
                </StyledBadge>
            </Link>
        </IconButton>
    );
}
