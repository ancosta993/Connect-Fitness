import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import TypoGraphy from '@mui/material/TypoGraphy';


const UsersList = ({users}) => {
   return (
      <Box sx={{mt:'5em'}}>
         <Grid container spacing={3}>
         {users.map(user => {
            return(
               <Grid item xs={12} md={6}>
                  <Card>
                     <CardHeader 
                        avatar = {
                           <Avatar sx={{backgroundColor: "green"}}> {user.username[0].toUpperCase()} </Avatar>
                        }
                        title={user.username}
                        subheader={user.email}
                     />
                     <CardContent>
                        <TypoGraphy>
                           Lorem ipsum generate random text number for color. Then use that number for rendering the components in react.
                        </TypoGraphy>
                     </CardContent>

                     <CardActions>
                        <Button size='medium' variant='outlined'>Contact</Button>
                        <Button size='medium' variant='outlined'>Follow</Button>
                     </CardActions>
                  </Card>
               </Grid>
            )
         })}
         </Grid>
      </Box>
   )
};

export default UsersList;