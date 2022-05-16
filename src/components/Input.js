import React, {memo, useState} from 'react';
import {TextField, Typography} from "@mui/material";
import ErrorHandler from "./ErrorHandler";

const Input = ({variant, label, placeholder, onChange, value}) => {
    console.log("Input")
    return (
        <>
            <TextField
                variant={variant}
                label={label}
                placeholder={placeholder}
                fullWidth
                onChange={(e) => {
                    onChange(e.target.value)}}
                value={value}
            />
            {label === "Card" && <ErrorHandler count={value.length}/>}
        </>
    );
};

export default memo(Input);