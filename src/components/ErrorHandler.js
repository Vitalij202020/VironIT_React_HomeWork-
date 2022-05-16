import React, {memo} from 'react';
import {Typography} from "@mui/material";

const ErrorHandler = ({count}) => {
    let msg = ''
    let color = ""
    console.log("ErrorHandler")
    if (count > 16) {
        msg = "Warning! Length Of Your Card Number Must Be 16!"
        color = "#e53935"
    } else if (count === 16) {
        msg = "Well Done, Thank You"
        color = "#43a047"
    }  else if (count < 16 && count > 0) {
        msg = "Keep Typing..."
        color = "#f9a825"
    } else if (count === 0) {
        msg = ""
    }

    return (
        <Typography sx={{color: {color}}}>{msg}</Typography>
    );
};

export default memo(ErrorHandler, (prevProps, nextProps) => {
    if (nextProps.count === 16 || nextProps.count === 17 || nextProps.count === 1 || nextProps.count === 15 || nextProps.count === 0) {
        return false
    }
    return true
});