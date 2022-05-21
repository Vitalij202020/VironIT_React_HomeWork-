import * as React from 'react';
import Switch from '@mui/material/Switch';
import {useActions} from "../hooks/useActions";
import {useState} from "react";

export default function Switcher() {
    const [admin, setAdmin] = useState(false)
    const {changeRole} = useActions()

    function onChangeHandler() {
        if (!admin) {
            changeRole('admin')
        } else {
            changeRole('user')
        }
        setAdmin(!admin)
    }

    return (
        <Switch
            checked={admin}
            onChange={onChangeHandler}
            inputProps={{ 'aria-label': 'controlled' }}
            color="default"
        />
    );
}
