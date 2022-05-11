import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Container} from "@mui/material";
import {useSelector} from "react-redux";



export default function UserTable() {
    const {user} = useSelector(state => state.user)

    function createData( data, value) {
        return { data, value };
    }

    const rows = [
        createData('User Name', user.name),
        createData('User SurName', user.surname),
        createData('Age', user.age),
        createData('Email', user.email),
    ];

    return (
        <Container sx={{ width: "700px"}}>
        <TableContainer component={Paper} sx={{ marginTop: "15px" }}>
            <Table  aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>User</TableCell>
                        <TableCell align="right">Data</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.data}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.data}
                            </TableCell>
                            <TableCell align="right">{row.value}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
            {/*<Box sx={{ float: "right", marginTop: "15px"}}>*/}
            {/*    <Button variant="outlined" >Edit</Button>*/}
            {/*</Box>*/}

        </Container>
    );
}