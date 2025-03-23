import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100px',
      }}
    >
      <CircularProgress
        // variant="determinate"
        // sx={theme => ({
        //   color: theme.palette.grey[200],
        //   ...theme.applyStyles('dark', {
        //     color: theme.palette.grey[800],
        //   }),
        // })}
        // color="success"
        size={40}
        thickness={4}
        // {...props}
        value={100}
      />
    </Box>
  );
};

export default Loader;
