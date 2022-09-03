import React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';

import { Typography} from '@mui/material';
import {GrEdit} from 'react-icons/gr';

const UserInfoCard = ({user}) => {

   return (
      <>
         <Card>
            <CardHeader 
               avatar = {
                  <Avatar
                     alt="User's Avatar"
                     src={require('../../assets/avater/universal-avatar-img.jpg')}
                     sx={{ width: '15rem', height: '15rem' }}
                  />
               }
               title = {
                  <>
                     <Typography sx={{mb:'1rem'}} variant='h3'>{
                        `@${user.username}`
                     }</Typography>
                     <Divider />
                  </>
               }
               action = {
                  <IconButton sx={{mr:'15rem'}}>
                     <GrEdit />
                  </IconButton>
               }
               subheader = {
                  <Grid container spacing={10}>
                     <Grid item>
                        <List>
                           <ListItem>
                              <ListItemText><Chip variant='outlined' label={`Age: ${user.age}`} /></ListItemText>
                           </ListItem>
                           <ListItem>
                              <ListItemText><Chip variant='outlined' label={`Level: ${user.level}`} /></ListItemText>
                           </ListItem>
                           <ListItem>
                              <ListItemText><Chip variant='outlined' label={`Gender: ${user.gender}`} /></ListItemText>
                           </ListItem>
                           <ListItem>
                              <ListItemText><Chip variant='outlined' label={`Weight: ${user.weight} lbs`} /></ListItemText>
                           </ListItem>
                        </List>
                     </Grid>

                     <Grid item>
                        <Typography sx={{maxWidth:'50ch', mt:'2rem'}}>
                           {user.description}
                        </Typography>
                     </Grid>
                  </Grid>
               }
            />
         </Card>
         <Divider />
         
      </>
      
   )
}

export default UserInfoCard;

