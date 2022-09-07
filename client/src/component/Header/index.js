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
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="fixed">
        <Toolbar sx={{p: .5, backgroundColor:"var(--secondary)" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ ml: 2 }}
          >
          <SportsGymnasticsIcon sx={{ width:'2rem', height:'2rem'}} />
          </IconButton>
  
          {/* <Typography variant="h5" component="div" sx={{ flexGrow: 1}}>
            <Link to='/'>
              FITNESS MEETUP
            </Link>
          </Typography> */}

          <Link to='/' style={{flexGrow: 1}}>
            <Typography variant="h5" component="div" sx={{'&:hover':{cursor:'pointer'}}}>
              CONNECT <span className="fit">FITNESS</span> 
            </Typography>
          </Link>

          {!Auth.loggedIn() ? (
            <>
              <Button color='inherit'>
                <Link to='/meetothers'>
                  Meet Others
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
                  Meet Others
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