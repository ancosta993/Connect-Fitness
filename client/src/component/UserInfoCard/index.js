import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';

//dialog component
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';

import Auth from '../../utils/auth';

// importing all the followers component
import FollowList from '../FollowList';

import {Link, useParams} from 'react-router-dom';

import { Typography} from '@mui/material';
import {GrEdit} from 'react-icons/gr';

import {useMutation} from '@apollo/client';
import {ADD_FOLLOWER} from '../../utils/mutations';


const UserInfoCard = ({user}) => {
   const [addFollower] = useMutation(ADD_FOLLOWER);
   const { username: userParam } = useParams();


   const handleFollower = async () => {
      try {
         if(Auth.loggedIn()) {
            await addFollower({
           variables: {followerId: user._id}
            });
            handleOpenConfirm();
         } else {
            handleOpenDeny();
         }
         
       } catch(e){
         console.log(e);
       }
   }

   //for dialog follow confirm start
   const [openConfirm, setOpenConfirm] = useState(false);
   const handleOpenConfirm = () => {
       setOpenConfirm(true);
   };
   const handleCloseConfirm = () => {
       setOpenConfirm(false);
   };
   // for dialog follow confirm ends

   //for dialog follow Deni start
   const [openDeny, setOpenDeny] = useState(false);
   const handleOpenDeny = () => {
       setOpenDeny(true);
   };
   const handleCloseDeny = () => {
       setOpenDeny(false);
   };
   // for dialog follow Deni ends

   return (
      <>
         <Card>
            <CardHeader 
               avatar = {
                  <Avatar
                     alt="User's Avatar"
                     src={require('../../assets/avater/universal-avatar-img.jpg')}
                     sx={{ width: '10rem', height: '10rem' }}
                  />
                  
               }
               title = {
                  <>
                     <Typography sx={{mb:'0.7rem'}} variant='h3'>{
                        `@${user.username}`
                     }</Typography>
                     <Divider />
                  </>
               }
               action = {
                  <IconButton sx={{mr:'15rem'}}>
                     <GrEdit/>
                  </IconButton>
                  
               }
               subheader = {
                  <Grid container spacing={5}>
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
                        <Typography sx={{maxWidth:'35ch', mt:'2rem'}}>
                           {user.description}
                        </Typography>
                     </Grid>

                     <Grid item>
                        {user.follow.length ? (
                           <FollowList user={user}/>
                        ):(
                           <Typography sx={{ml:'1rem', mb:'0.2rem'}}>User is following no one</Typography>
                        )}
                     </Grid>
                     <Grid item>
                        <Button size='small' variant='outlined' sx={{ml:'0.5rem'}}>
                           <Link to ={`/followersList/${user.username}`} style={{border:'none', padding:'0px'}} >Followers</Link>
                        </Button>
                        
                     </Grid>
                  </Grid>
               }
               
            />
            <CardActions sx={{display:'flex', justifyContent:'center'}}>
               {!userParam ? (
                  <>
                     <Button variant='outlined' size='small'>
                        <Link style={{border:'none', padding:'0px'}} to='/newroutine'>Add workout</Link>
                     </Button>
                     <Button sx={{ml:'0.5rem'}} variant='outlined' size='small'>
                        <Link style={{border:'none', padding:'0px'}}  to='/newdiet'>Add diet</Link>
                     </Button>
                  </>
               ):(
                  <Button sx={{mt:'1rem'}} variant='outlined' size='small' onClick = {handleFollower}>Follow</Button>
               )}
            </CardActions>
         </Card>
         <Divider />
         {/* following confirm dialog */}
         <Dialog 
            open={openConfirm}
            onClose={handleCloseConfirm}>
            <DialogTitle>{`You are now following ${user.username}`}</DialogTitle>
            <DialogActions sx={{display:'flex',justifyContent:'center'}}>
            <Button onClick={handleCloseConfirm}>Close</Button>
            </DialogActions>
         </Dialog>
         {/* following confirm dialog */}

         {/* following Deny dialog */}
         <Dialog 
            open={openDeny}
            onClose={handleCloseDeny}>
            <DialogTitle>You must log in to follow</DialogTitle>
            <DialogActions sx={{display:'flex',justifyContent:'center'}}>
            <Button onClick={handleCloseDeny}>Close</Button>
            <Button><Link to='/login'>Log in</Link></Button>
            </DialogActions>
         </Dialog>
         {/* following Deny dialog */}
      </>
      
   )
}

export default UserInfoCard;

