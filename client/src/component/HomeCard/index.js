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
      <Grid container spacing={3} sx={{display:"flex", justifyContent:"center"}} >
         <Grid item xs={4} md={4}>
            <Card>
               <CardHeader 
                  sx={{backgroundColor:"var(--tertiary)", color:'white'}}
                  action ={
                     <IconButton sx={{color:'white'}}>
                        <BiDumbbell />
                     </IconButton>
                  }
                  title = 'Show Off Your Routine'
                  subheader = 'Hold yourself accountable and create a fitness routine to share with your friends.'
               />
               <CardMedia 
                  component = 'img'
                  height = '150'
                  image = {require('../../assets/card_image/card-image-routine.jpg')}
               />

               <CardContent>
                  <Typography variant='body2' color='textSecondary'>
                     Be your own personal trainer, create your fitness routine now!
                  </Typography>
               </CardContent>

               <CardActions>
               <Button variant='contained' 
                     sx={{backgroundColor:'var(--primary)', color:'white', 
                     "&:hover": {
                     backgroundColor: "var(--dark)" }}} 
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
                  sx={{backgroundColor:"var(--tertiary)", color:'white'}}
                  action = {
                     <IconButton sx={{color:'white'}}>
                        <MdFoodBank />
                     </IconButton>
                  }
                  title = 'Track Your Diet'
                  subheader = 'Keep track of your diet and show others what you are eating for each meal.'
               />
               <CardMedia 
                  component = 'img'
                  height = '150'
                  image = {require('../../assets/card_image/card-image-diet.jpg')}
               />
                <CardContent>
                  <Typography variant='body2' color='textSecondary'>
                     Fitness begins with a healthy lifestyle. Track your diet now!
                  </Typography>
               </CardContent>
               <CardActions>
               <Button variant='contained' 
                     sx={{backgroundColor:'var(--primary)', color:'white', 
                     "&:hover": {
                     backgroundColor: "var(--dark)" }}} 
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
                  sx={{backgroundColor:"var(--tertiary)", color:'white'}}
                  action = {
                     <IconButton sx={{color:'white'}}>
                        <TiGroup />
                     </IconButton>
                  }
                  title = 'Learn About Others'
                  subheader = 'Learn from your peers. See how other Connect Fitness users are doing.'
               />
               <CardMedia 
                  component = 'img'
                  height = '150'
                  image = {require('../../assets/card_image/card-image-meetother.jpg')}
               />
                <CardContent>
                  <Typography variant='body2' color='textSecondary'>
                     You're not in this alone, there are so many others out there!
                  </Typography>
               </CardContent>
               <CardActions>
               <Button variant='contained' 
                     sx={{backgroundColor:'var(--primary)', color:'white', 
                     "&:hover": {
                     backgroundColor: "var(--dark)" }}} 
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