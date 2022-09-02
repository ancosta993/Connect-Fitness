import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'

const Routine = () => {

    return (
        
        <>
         <Box component='div' sx={{pt: "2em", pb:"2em", backgroundColor:'white'}}>
            <Grid container spacing={3}>
               <Grid item xs={12} md={9}>
               </Grid>
               <Grid item xs={12} md={3}>
                  <Box component='div' style={{background: 'gray'}}>
                  </Box>
               </Grid>
            </Grid>
         </Box>
        </>

    )

}

export default Routine;