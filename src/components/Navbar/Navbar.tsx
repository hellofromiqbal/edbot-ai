import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ProgressBar from '../ProgressBar/ProgressBar';
import { Close, InfoOutlined } from '@mui/icons-material';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          background: 'linear-gradient(101deg,#ffd946,#ffd018 23.96%,#fdbd1a)',
          boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px'
        }}
      >
        <Toolbar>
          <IconButton size="large" sx={{ color: 'black' }}>
            <Close fontSize='large'/>
          </IconButton>
          <ProgressBar/>
          <IconButton sx={{ color: 'black' }}>
            <InfoOutlined />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
