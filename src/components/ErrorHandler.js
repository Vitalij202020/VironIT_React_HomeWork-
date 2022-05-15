import React, {memo} from 'react';
import {Typography} from "@mui/material";

const ErrorHandler = ({count}) => {
    let msg = ''
    let color = ""

    if (count > 16) {
        msg = "Warning! Length Of Your Card Number Must Be 16!"
        color = "#e53935"
    } else if (count === 16) {
        msg = "Well Done, Thank You"
        color = "#43a047"
    }

    return (
        <Typography sx={{color: {color}}}>{msg}</Typography>
    );
};

export default memo(ErrorHandler, (prevProps, nextProps) => {
    if (nextProps.count === 16 || nextProps.count === 17) {
        return false
    }
    return true
});