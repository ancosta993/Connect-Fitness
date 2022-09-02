import React from 'react';
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
                     <IconButton sx={{backgroundColor:'white', mr:"0.3em"}} > <GrHome/> </IconButton>
                     <ListItemText primary="Home" />
                  </ListItem>
                  <ListItem>
                     <IconButton sx={{backgroundColor:'white', mr:"0.3em"}}> <GrContact/> </IconButton>
                     <ListItemText primary="Contact Us" />
                  </ListItem>
                  <ListItem>
                     <IconButton sx={{backgroundColor:'white', mr:"0.3em"}}> <GrGroup/> </IconButton>
                     <ListItemText primary="Our Team" />
                  </ListItem>
               </List>
            </Grid>
            <Grid item sx={12} md={6}>
               <List>
                  <ListItem>
                     <IconButton sx={{backgroundColor:'white', mr:"0.3em"}}> <GrInstagram/> </IconButton>
                     <ListItemText primary="Instagram" />
                  </ListItem>
                  <ListItem>
                     <IconButton sx={{backgroundColor:'white', mr:"0.3em"}}> <GrFacebook/> </IconButton>
                     <ListItemText primary="Facebook" />
                  </ListItem>
                  <ListItem>
                     <IconButton sx={{backgroundColor:'white', mr:"0.3em"}}> <GrTwitter/> </IconButton>
                     <ListItemText primary="Twitter" />
                  </ListItem>
               </List>
            </Grid>
         </Grid>
      </Box>
   )
};

export default Footer;