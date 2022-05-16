import React, {memo, useState} from 'react';
import UserForm from "../components/UserForm";
import {Container, Stack, Typography} from "@mui/material";
import UserTable from "../components/UserTable";
import {TextField} from "@mui/material";
import Input from "../components/Input";

const Profile = () => {
    const [name, setName] = useState('')
    const [surName, setSurName] = useState('')
    const [card, setCard] = useState('')
    console.log("Profile")
    return (
        <Container maxWidth="sm">
            <Typography
                sx={{margin: "20px 0"}}
                textAlign={"center"}
                variant="h6"
                color="textSecondary"
                component="h2"
                gutterBottom
            >
                Testing Optimizations
            </Typography>
            <Stack spacing={3} sx={{textAlign: "center"}}>
                <Input variant="outlined" label="Name" placeholder="first name" onChange={setName} value={name}/>
                <Input variant="outlined" label="Surname" placeholder="last name" onChange={setSurName} value={surName}/>
                <Input variant="outlined" label="Card" placeholder="16 digital number" onChange={setCard} value={card} />
            </Stack>
            {/*<UserForm/>*/}
            {/*<UserTable/>*/}
        </Container>
    );
};

export default memo(Profile);