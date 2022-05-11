import React from 'react';
import UserForm from "../components/UserForm";
import {Container} from "@mui/material";
import UserTable from "../components/UserTable";

const Profile = () => {
    return (
        <Container>
            <UserForm/>
            <UserTable/>
        </Container>
    );
};

export default Profile;