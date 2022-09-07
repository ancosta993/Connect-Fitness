import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box';
import {IconButton, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import {useQuery} from '@apollo/client';
import {QUERY_USER, QUERY_ME} from '../../utils/queries';


const FollowersList = () => {
   const {username: userParam} = useParams();
   // if a parameter is provided in the URL, then use that parameter to render the infromation about that user.
  
   const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
      variables: { username: userParam }
    });

    // check the data from whichever query returned the result
    const user = data?.me || data?.user || {};
   
   return(
      <Box sx={{m:'5rem', p:'3rem'}}>
         <Typography sx={{ml:'1rem', mb:'0.2rem', fontWeight:'bold', fontSize:'2rem'}}>User is followed by:</Typography>
         {user.followers.map(item => {
            return(
               <Card key={item._id} sx={{maxWidth:'15rem', mb:'1rem'}}>
                  <CardHeader
                  sx={{pt:'0.2rem',pb:'1rem'}}
                  action = {
                     <Link to={`/dashboard/${item.username}`}>Visit</Link>
                  }
                  avatar = {
                     <Avatar sx={{backgroundColor: `green`}}> {item.username[0].toUpperCase()} </Avatar>
                  }
                  
                  title={<Typography sx={{fontSize:'1.5rem; '}}>{`@${item.username}`}</Typography>}
               />
               
               </Card>
            )
         })}
      </Box>
   )
};

export default FollowersList;