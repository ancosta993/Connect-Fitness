import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CarouselComp from '../CarouselComp';
import HomeCard from '../HomeCard';
// import the pictures to render in carousel
import image_1 from "../../assets/carousel_image/carousel-image-1.jpg";
import image_2 from "../../assets/carousel_image/carousel-image-2.jpg";
import image_3 from "../../assets/carousel_image/carousel-image-3.jpg";

const Home = () => {

   const [carItems, setCarItems] = useState([
      {id:1, image: image_1},
      {id:2, image: image_2},
      {id:3, image: image_3} 
   ]);

   return(
      <>
         <CarouselComp items={carItems}/>
         <Box type='div' sx={{mt: "10px"}}>
            <Grid container spacing={3}>
               <Grid item xs={12} md={9}>
                  <HomeCard />
               </Grid>
               <Grid item xs={12} md={3}>
                  <div style={{background: 'gray'}}>
                     Side Stuff
                  </div>
               </Grid>
            </Grid>
         </Box>
         
      </>
      
   )
}

export default Home;