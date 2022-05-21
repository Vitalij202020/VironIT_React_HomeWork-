import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {useActions} from "../hooks/useActions";

export default function MySelect() {
    const [top, setTop] = React.useState('');
    const {sortByMore, sortByLess} = useActions()

    const handleChange = (event: SelectChangeEvent) => {
        setTop(event.target.value as string);
        if (event.target.value === 'more') {
            sortByMore()
        } else if (event.target.value === 'less') {
            sortByLess()
        }
    };

    return (
        <Box sx={{ minWidth: 120, m: '70px 30px 0 30px' }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    value={top}
                    label="Sort By"
                    onChange={handleChange}
                >
                    <MenuItem value={'less'}>Less Saleable</MenuItem>
                    <MenuItem value={'more'}>More Saleable</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
