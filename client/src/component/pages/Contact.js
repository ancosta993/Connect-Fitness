import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import FormLabel from '@mui/material/FormLabel';


import { Typography } from '@mui/material';

const Contact = () => {
   return(
      <Box sx={{m:'5rem'}}>
         <Card>
            <CardHeader

               title = {
                  <Typography sx={{fontSize:"2rem"}}>
                     Thank you for contacting us
                  </Typography>
               }
               subheader = "You will hear from us, shortly"
            />
            <CardContent>
               <FormLabel sx={{fontSize:"1.5rem", display:'block', fontWeight:"Bold"}}>Email:</FormLabel>
               <TextField sx={{mt:'0.2rem', mb:'1rem', width:'20rem'}} />

               <FormLabel sx={{fontSize:"1.5rem", display:'block', fontWeight:"Bold"}}>Subject:</FormLabel>
               <TextField fullWidth 
                  sx={{mt:'0.2rem', mb:'1rem'}}
               />

               <FormLabel sx={{fontSize:"1.5rem", fontWeight:"Bold"}}>Message:</FormLabel>
               <TextField fullWidth 
                  multiline
                  rows={4}
                  sx={{mt:'0.2rem', mb:'0.5rem'}}
               />
            </CardContent>

            <CardActions>
               <Button variant='contained' fullWidth>Submit</Button>
            </CardActions>
         </Card>
      </Box>
   )
}

export default Contact;