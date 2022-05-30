import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Spinner() {
    return (
        <Box className='spinner'>
            <CircularProgress />
        </Box>
    )
}

export default Spinner