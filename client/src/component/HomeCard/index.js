import React from 'react';
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
                  sx={{backgroundColor:"#B5D99C"}}
                  action ={
                     <IconButton sx={{color:'#0F0326'}}>
                        <BiDumbbell />
                     </IconButton>
                  }
                  title = 'Shoe Off Your Routine'
                  subheader = 'For others aswell!'
               />
               <CardMedia 
                  component = 'img'
                  height = '150'
                  image = {require('../../assets/card_image/card-image-routine.jpg')}
               />

               <CardContent sx={{backgroundColor:'#F5F7DC'}}>
                  <Typography variant='body2' color='textSecondary'>
                     Create your personal routine and share it others! Create your routine now!
                  </Typography>
               </CardContent>

               <CardActions sx={{backgroundColor:'#F5F7DC'}}>
                  <Button variant='filled' 
                     sx={{backgroundColor:'#0F0326', color:'white', 
                     "&:hover": {
                     backgroundColor: "red" }}} 
                     size='large'>Create Now
                  </Button>
               </CardActions> 
            </Card>
         </Grid>
         <Grid item xs={4} md={4}>
            <Card>
               <CardHeader
                  sx={{backgroundColor:"#B5D99C"}}
                  action = {
                     <IconButton sx={{color:'#0F0326'}}>
                        <MdFoodBank />
                     </IconButton>
                  }
                  title = 'Create Your Diet'
                  subheader = 'Tasty and Healthy'
               />
               <CardMedia 
                  component = 'img'
                  height = '150'
                  image = {require('../../assets/card_image/card-image-diet.jpg')}
               />
                <CardContent sx={{backgroundColor:'#F5F7DC'}}>
                  <Typography variant='body2' color='textSecondary'>
                     Create your personal routine and share it others! Create your routine now!
                  </Typography>
               </CardContent>
               <CardActions sx={{backgroundColor:'#F5F7DC'}}>
               <Button variant='filled' 
                     sx={{backgroundColor:'#0F0326', color:'white', 
                     "&:hover": {
                     backgroundColor: "red" }}} 
                     size='large'>Eat Now
                  </Button>
               </CardActions> 
            </Card>
         </Grid>
         <Grid item xs={4} md={4}>
            <Card>
               <CardHeader 
                  sx={{backgroundColor:"#B5D99C"}}
                  action = {
                     <IconButton sx={{color:'#0F0326'}}>
                        <TiGroup />
                     </IconButton>
                  }
                  title = 'Learn about Others'
                  subheader = 'See who is working harder'
               />
               <CardMedia 
                  component = 'img'
                  height = '150'
                  image = {require('../../assets/card_image/card-image-meetother.jpg')}
               />
                <CardContent sx={{backgroundColor:'#F5F7DC'}}>
                  <Typography variant='body2' color='textSecondary'>
                     See what others are doing! Remember, you can always learn from others who maybe an expert or have just began just like you. You can use tags to filter your search.
                  </Typography>
               </CardContent>
               <CardActions sx={{backgroundColor:'#F5F7DC'}}>
               <Button variant='filled' 
                     sx={{backgroundColor:'#0F0326', color:'white', 
                     "&:hover": {
                     backgroundColor: "red" }}} 
                     size='large'>Meet Now
                  </Button>
               </CardActions> 
            </Card>
         </Grid>
      </Grid>
   )
};

export default HomeCard;