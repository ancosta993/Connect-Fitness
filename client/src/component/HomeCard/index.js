import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Icon, IconButton } from '@mui/material';
import {BiDumbbell} from 'react-icons/bi';
import {MdFoodBank} from 'react-icons/md';
import {TiGroup} from 'react-icons/ti';


const HomeCard = () => {
   return(
      <Grid container spacing={5}>
         <Grid item xs={4} md={4}>
            <Card>
               <CardHeader 
                  action ={
                     <IconButton>
                        <BiDumbbell />
                     </IconButton>
                  }
               />
               
            </Card>
         </Grid>
         <Grid item xs={4} md={4}>
            <Card>
               <CardHeader
                  action = {
                     <IconButton>
                        <MdFoodBank />
                     </IconButton>
                  }
               />
               
            </Card>
         </Grid>
         <Grid item xs={4} md={4}>
            <Card>
               <CardHeader 
                  action = {
                     <IconButton>
                        <TiGroup />
                     </IconButton>
                  }
               />
            </Card>
         </Grid>
      </Grid>
   )
};

export default HomeCard;