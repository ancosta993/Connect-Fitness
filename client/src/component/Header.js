import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
  
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to='/meetothers'>
              FITNESS MEETUP
            </Link>
          </Typography>

          <Button color='inherit'>
            <Link to='/meetothers'>
              MeetUp!
            </Link>
          </Button>
          <Button color="inherit">
            <Link to='/signup'>
              SignUp
            </Link>
          </Button>
          <Button color="inherit">
            <Link to='/login'>
              Login
            </Link>
          </Button>
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;