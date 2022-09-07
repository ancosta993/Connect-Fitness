import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CarouselComp from '../CarouselComp';
import HomeCard from '../HomeCard';
import Button from '@mui/material/Button';
// import the pictures to render in carousel
import image_1 from "../../assets/carousel_image/carousel-image-1.jpg";
import image_2 from "../../assets/carousel_image/carousel-image-2.jpg";
import image_3 from "../../assets/carousel_image/carousel-image-3.jpg";
import { Typography } from '@mui/material';

const Home = () => {

   const [carItems, setCarItems] = useState([
      {id:1, image: image_1},
      {id:2, image: image_2},
      {id:3, image: image_3} 
   ]);

   return(
      <>
         <CarouselComp items={carItems}/>
         <Box component='div' sx={{pt: "2em", pb:"4em"}}>
            <Grid container spacing={3}>
               <Grid item xs={14} md={12}>
                  <Typography sx={{fontWeight:"bold", textAlign:'Center', fontSize:"3rem", color:'var(--dark)'}}>
                      HERE IS WHAT YOU CAN DO
                  </Typography>

                  <HomeCard />
               </Grid>
            </Grid>
         </Box>
         <Box>
         <Grid>
            <Grid item xs={12} md={3}>
                  <Box component='div'>
                     <Paper sx={{m: 5, textAlign: "center", backgroundColor: "var(--primary)", pb: 2}}>
                        <Typography component='p' sx ={{pt:'1rem', pb:'1rem'}} >Donation is never required, but it is always appreciated!
                           As much as $1 helps immensely for Connect Fitness to run without ads.
                        </Typography>
                        <Button variant='contained' size='sm' sx={{backgroundColor: "var(--dark)"}}>
                           Donate
                        </Button>
                     </Paper>
                  </Box>
               </Grid>
            </Grid>
         </Box>
      </>
      
   )
}

export default Home;