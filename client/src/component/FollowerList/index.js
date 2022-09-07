import React, {useEffect} from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar'
import { Typography } from '@mui/material';

const FollowerList = ({user}) => {
   const {followers} = user;
   
   return(
      <>
         <Typography sx={{ml:'1rem', mb:'0.2rem'}}>User is followed by</Typography>
         {followers.map(item => {
            return(
               <CardHeader
                  sx={{pt:'0.2rem',pb:'0'}}
                  key={item._id}
                  avatar = {
                     <Avatar sx={{backgroundColor: `green`}}> {item.username[0].toUpperCase()} </Avatar>
                  }
                  
                  title={`@${item.username}`}
               />
            )
         })}
      </>
   )
};

export default FollowerList;