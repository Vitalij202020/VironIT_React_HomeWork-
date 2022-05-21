import React from 'react';
import UserForm from "../components/UserForm";
import {Container, Typography} from "@mui/material";
import UserTable from "../components/UserTable";


const Profile = () => {

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
            <UserForm/>
            <UserTable/>
        </Container>
    );
};

export default Profile;