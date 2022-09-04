import React from 'react';
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {GrContact, GrHome, GrGroup, GrInstagram, GrFacebook, GrTwitter} from 'react-icons/gr';
import { IconButton, Typography } from '@mui/material';

const Footer = () => {

   return(
      <Box sx={{backgroundColor:"#0F0326", color:'#FFFFFF', pl:'100px'}}>
         <Grid container>
            <Grid item sx={12} md={6}>
               <List>
                  <ListItem>
                     <Link to='/'>
                        <IconButton sx={{backgroundColor:'white', mr:"0.3em", "&:hover": {backgroundColor: "white"}}} > <GrHome/> </IconButton>
                        <ListItemText sx={{ "&:hover": {cursor: "pointer"}}} primary="Home" />
                     </Link>
                  </ListItem>

                  <ListItem>
                     <Link to='/contactUs'>
                        <IconButton sx={{backgroundColor:'white', mr:"0.3em","&:hover": {backgroundColor: "white"}}}> <GrContact/> </IconButton>
                        <ListItemText sx={{ "&:hover": {cursor: "pointer"}}} primary="Contact Us" />
                     </Link>
                  </ListItem>

                  <ListItem>
                     <Link to='/'>
                        <IconButton sx={{backgroundColor:'white', mr:"0.3em","&:hover": {backgroundColor: "white"}}}> <GrGroup/> </IconButton>
                        <ListItemText sx={{ "&:hover": {cursor: "pointer"}}} primary="Our Team" />
                     </Link> 
                  </ListItem>
               </List>
            </Grid>
            <Grid item sx={12} md={6}>
               <List>
                  <ListItem>
                     <Link to='/'>
                        <IconButton sx={{backgroundColor:'white', mr:"0.3em","&:hover": {backgroundColor: "white"}}}> <GrInstagram/> </IconButton>
                        <ListItemText sx={{ "&:hover": {cursor: "pointer"}}} primary="Instagram" />
                     </Link> 
                  </ListItem>
                  <ListItem>
                  <Link to='/'>
                        <IconButton sx={{backgroundColor:'white', mr:"0.3em","&:hover": {backgroundColor: "white"}}}> <GrFacebook/> </IconButton>
                        <ListItemText sx={{ "&:hover": {cursor: "pointer"}}} primary="Facebook" />
                     </Link> 
                  </ListItem>
                  <ListItem>
                     <Link to='/'>
                        <IconButton sx={{backgroundColor:'white', mr:"0.3em","&:hover": {backgroundColor: "white"}}}> <GrTwitter/> </IconButton>
                        <ListItemText sx={{ "&:hover": {cursor: "pointer"}}} primary="Twitter" />
                     </Link> 
                  </ListItem>
               </List>
            </Grid>
         </Grid>
      </Box>
   )
};

export default Footer;