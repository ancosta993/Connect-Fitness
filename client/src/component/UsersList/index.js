import React, {useState } from 'react';
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip'


const UsersList = ({users}) => { 

   return (
      <Box sx={{mt:'5em'}}>
         <Grid container spacing={3}>
            {users.map(user => {  
               return (<Grid key={user.username} item xs={12} md={6}>
                  <Card>
                     <CardHeader 
                        avatar = {
                           <Avatar sx={{backgroundColor: `green`}}> {user.username[0].toUpperCase()} </Avatar>
                        }
                     
                        title={`${user.username} (${user.email})`}
                        subheader={
                           <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', gap:'10px'}}>
                              {`${user.age} years old, ${user.gender}`}
                              <Chip label={user.level} variant="outlined" />
                           </div>
                        }
                        
                     />
                     <CardContent>
                        <Typography>
                           {user.description}
                        </Typography>
                     </CardContent>

                     <CardActions>
                        <Button size='small' sx={{ml:'0.5rem'}} variant='outlined'>
                           <Link style={{border:'none', padding:'0px'}} to={`/dashboard/${user.username}`}>Visit</Link>
                        </Button>
                     </CardActions>
                  </Card>
               </Grid>)
         })}
         </Grid>
      </Box>
   )
};

export default UsersList;