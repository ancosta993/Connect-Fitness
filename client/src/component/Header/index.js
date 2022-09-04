import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
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
            <Link to='/'>
              FITNESS MEETUP
            </Link>
          </Typography>

          {!Auth.loggedIn() ? (
            <>
              <Button color='inherit'>
                <Link to='/meetothers'>
                  MeetUp!
                </Link>
              </Button>
              <Button color="inherit">
                <Link to='/newroutine'>
                  New Routine
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
            </>
          ) : (
            <>
              <Button color='inherit'>
                <Link to='/dashboard'>
                  <AccountCircleIcon sx={{ fontSize: 40 }}/>
                </Link>
              </Button>

              <Button color='inherit'>
                <Link to='/meetothers'>
                  MeetUp!
                </Link>
              </Button>
              
              <Button color='inherit'>
                <a href='/' onClick={logout}>
                  LOGOUT
                </a>
              </Button>
            </>
              
          )}
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;