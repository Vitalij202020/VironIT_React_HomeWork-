import React, {useState} from 'react';
import {Box, Button, Container, styled, TextField, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {editUser} from "../actions/userActions";

const StyledTextField = styled(TextField)({
    marginTop: 10,
    marginBottom: 10,
    display: 'block'

})

const UserForm = () => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')

    const {user} = useSelector(state => state.user)
    const dispatch = useDispatch()

    const updateUser = (e) => {
        e.preventDefault()
        const updatedUser = {
            name: name || user.name,
            surname: surname || user.surname,
            age: age || user.age,
            email: email || user.email
        }
        dispatch(editUser(updatedUser))
        setName('')
        setSurname('')
        setAge('')
        setEmail('')
    }

    return (
        <Container sx={{width: "500px"}}>
            <Typography
                sx={{marginTop: "15px"}}
                textAlign={"center"}
                variant="h6"
                color="textSecondary"
                component="h2"
                gutterBottom
            >
                Update User Profile
            </Typography>

            <form noValidate autoComplete="off" onSubmit={(e) => updateUser(e)}>
                <StyledTextField
                    onChange={(e) => setName(e.target.value)}
                    label="Name"
                    placeholder="first name"
                    variant="outlined"
                    fullWidth
                    value={name}
                />
                <StyledTextField
                    onChange={(e) => setSurname(e.target.value)}
                    label="SurName"
                    variant="outlined"
                    placeholder="second name"
                    fullWidth
                    value={surname}
                />
                <StyledTextField
                    onChange={(e) => setAge(e.target.value)}
                    label="Age"
                    variant="outlined"
                    placeholder="age"
                    fullWidth
                    value={age}
                />
                <StyledTextField
                    onChange={(e) => setEmail(e.target.value)}
                    label="Email"
                    variant="outlined"
                    placeholder="test@test.com"
                    fullWidth
                    value={email}
                />
                <Box sx={{float: "right"}}>
                    <Button
                        type="submit"
                        variant="outlined"
                    >
                        Submit
                    </Button>
                </Box>
            </form>
        </Container>
    );
};

export default UserForm;