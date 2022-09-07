import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box';
import {CardActions, IconButton, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import {Link, Navigate} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import {useQuery} from '@apollo/client';
import {QUERY_USER, QUERY_ME} from '../../utils/queries';
import Auth from '../../utils/auth';


const FollowersList = () => {
   const {username: userParam} = useParams();
   // if a parameter is provided in the URL, then use that parameter to render the infromation about that user.
  
   const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
      variables: { username: userParam }
    });

    // check the data from whichever query returned the result
    const user = data?.me || data?.user || {};

    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
      return <Navigate to="/dashboard" />;
    }

    if(loading) {
      return <div>Loading...</div>
    }

    if(!user?.username) {
      return(
         <h4>
         You need to be logged in to seet his page. Use the navigation links about to sign up or log in!
         </h4>
      );
    }
   
   return(
      <Box sx={{m:'5rem', p:'3rem'}}>
         <Typography sx={{ml:'1rem', mb:'0.2rem', fontWeight:'bold', fontSize:'2rem'}}>User is followed by:</Typography>
         {user.followers.map(item => {
            return(
               <Card key={item._id} sx={{width:'30rem', mb:'1rem', display:'flex',justifyContent:'center'}}>
                  <CardHeader
                  sx={{pt:'0.2rem', pb:'1rem'}}
                  
                  avatar = {
                     <Avatar sx={{backgroundColor: `green`}}> {item.username[0].toUpperCase()} </Avatar>
                  }
                  
                  title={<Typography sx={{fontSize:'1.5rem; '}}>{`@${item.username}`}</Typography>}
               />
                  <CardActions>
                     <Button variant='outlined' size='small'>
                        <Link style={{border:'none', padding:'0px', color:'#1976d2'}} to={`/dashboard/${item.username}`}>Visit</Link>
                     </Button>
                  </CardActions>
               </Card>
            )
         })}
      </Box>
   )
};

export default FollowersList;