import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CarouselComp from '../CarouselComp';
import HomeCard from '../HomeCard';
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
         <Box component='div' sx={{pt: "2em", pb:"2em", backgroundColor:'white'}}>
            <Grid container spacing={3}>
               <Grid item xs={12} md={9}>
                  <HomeCard />
               </Grid>
               <Grid item xs={12} md={3}>
                  <Box component='div' style={{background: 'gray'}}>
                     <Paper sx={{height:"100px"}}>
                        Content
                     </Paper>
                  </Box>
               </Grid>
            </Grid>
         </Box>
      </>
      
   )
}

export default Home;