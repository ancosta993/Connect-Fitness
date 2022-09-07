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
         <Box component='div' sx={{pt: "2em", pb:"2em", background: "linear-gradient(0deg, rgba(25,118,210,1) 10%, rgba(52,134,211,1) 47%, rgba(245,247,220,1) 82%)"}}>
            <Grid container spacing={3}>
               <Grid item xs={12} md={9}>
                  <Typography sx={{fontWeight:"bold", textAlign:'Center', fontSize:"3rem", fontFamily:'Roboto', color:'#1976d2'}}>
                      HERE IS WHAT TO DO
                  </Typography>

                  <HomeCard />
               </Grid>
               <Grid item xs={12} md={3}>
                  <Box component='div' sx={{mt:'6rem'}}>
                     <Paper sx={{display:'flex',backgroundColor:'#F5F7DC'}}>
                        <Typography component='p' sx ={{m:'3rem', pt:'2rem', pb:'2rem'}} >Donations are not required but are always appreciated!
                           Even as little as $1 helps immensely for an independent site like this to run without ads.
                        </Typography>
                        <Button variant='contained' size='large'>
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