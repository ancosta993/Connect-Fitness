import React from 'react';
import {Link} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActions, Icon, IconButton, Typography } from '@mui/material';
import {BiDumbbell} from 'react-icons/bi';
import {MdFoodBank} from 'react-icons/md';
import {TiGroup} from 'react-icons/ti';


const HomeCard = () => {
   return(
      <Grid container spacing={3}>
         <Grid item xs={4} md={4}>
            <Card>
               <CardHeader 
                  sx={{backgroundColor:"#1976d2", color:'white'}}
                  action ={
                     <IconButton sx={{color:'white'}}>
                        <BiDumbbell />
                     </IconButton>
                  }
                  title = 'Show Off Your Workout!'
                  subheader = "With your help others can reach their goals!"
               />
               <CardMedia 
                  component = 'img'
                  height = '150'
                  image = {require('../../assets/card_image/card-image-routine.jpg')}
               />

               <CardContent sx={{backgroundColor:'#F5F7DC'}}>
                  <Typography variant='body2' color='textSecondary'>
                     Do you have a special workout routine that you think other would like? Post it here for others to see and use!
                  </Typography>
               </CardContent>

               <CardActions sx={{backgroundColor:'#F5F7DC'}}>
                  <Button variant='filled' 
                     sx={{backgroundColor:'#0F0326', color:'white', 
                     "&:hover": {
                     backgroundColor: "red" }}} 
                     size='large'
                     >
                        <Link to='/newroutine'>Create Now</Link>   
                  </Button> 
               </CardActions> 
            </Card>
         </Grid>
         <Grid item xs={4} md={4}>
            <Card>
               <CardHeader
                  sx={{backgroundColor:"#1976d2", color:'white'}}
                  action = {
                     <IconButton sx={{color:'white'}}>
                        <MdFoodBank />
                     </IconButton>
                  }
                  title = 'Show Off Your Meals!'
                  subheader = 'Help others break away from the same old same old!'
               />
               <CardMedia 
                  component = 'img'
                  height = '150'
                  image = {require('../../assets/card_image/card-image-diet.jpg')}
               />
                <CardContent sx={{backgroundColor:'#F5F7DC'}}>
                  <Typography variant='body2' color='textSecondary'>
                     Post your favorite healthy meals for others to see and create themselves!
                  </Typography>
               </CardContent>
               <CardActions sx={{backgroundColor:'#F5F7DC'}}>
                  <Button variant='filled' 
                     sx={{backgroundColor:'#0F0326', color:'white', 
                     "&:hover": {
                     backgroundColor: "red" }}} 
                     size='large'
                     >
                        <Link to='/newdiet'>Share Now</Link>   
                  </Button>
               </CardActions> 
            </Card>
         </Grid>
         <Grid item xs={4} md={4}>
            <Card>
               <CardHeader 
                  sx={{backgroundColor:"#1976d2", color:'white'}}
                  action = {
                     <IconButton sx={{color:'white'}}>
                        <TiGroup />
                     </IconButton>
                  }
                  title = 'Learn From Others'
                  subheader = 'See how YOU can work harder!'
               />
               <CardMedia 
                  component = 'img'
                  height = '150'
                  image = {require('../../assets/card_image/card-image-meetother.jpg')}
               />
                <CardContent sx={{backgroundColor:'#F5F7DC'}}>
                  <Typography variant='body2' color='textSecondary'>
                     You don't just need to create content for others! Use the platform to power up your workouts and diet as well!
                  </Typography>
               </CardContent>
               <CardActions sx={{backgroundColor:'#F5F7DC'}}>
               <Button variant='filled' 
                     sx={{backgroundColor:'#0F0326', color:'white', 
                     "&:hover": {
                     backgroundColor: "red" }}} 
                     size='large'
                     >
                        <Link to='/meetothers'>Learn Now</Link>
                  </Button>
               </CardActions> 
            </Card>
         </Grid>
      </Grid>
   )
};

export default HomeCard;