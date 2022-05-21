import React, {useState} from 'react';
import {Box, Button, Container, styled, TextField, Typography} from "@mui/material";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";

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
    const [role, setRole] = useState('')


    const {user} = useTypedSelector(state => state.user)
    const {editUser} = useActions()

    const updateUser = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const updatedUser = {
            name: name || user.name,
            surname: surname || user.surname,
            age: age || user.age,
            email: email || user.email,
            role: role || user.role
        }
        editUser(updatedUser)
        setName('')
        setSurname('')
        setAge('')
        setEmail('')
        setRole('')
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
                <StyledTextField
                    onChange={(e) => setRole(e.target.value)}
                    label="Role"
                    variant="outlined"
                    placeholder="admin"
                    fullWidth
                    value={role}
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