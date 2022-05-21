import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export const Loader = () => {
    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <LinearProgress sx={{marginTop: '20vh', width: '50vw'}} />
        </Box>
    );
}
