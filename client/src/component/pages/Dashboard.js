import React from 'react';
import {useParams} from 'react-router-dom';
import {useQuery} from '@apollo/client';
import {QUERY_USERS, QUERY_ME} from '../../utils/queries';
import Paper from '@mui/material/Paper';
import UserInfoCard from '../UserInfoCard';
import UserInfoTab from '../UserInfoTab'

const Dashboard = () => {
   const {username: userParam} = useParams();
   // if a parameter is provided in the URL, then use that parameter to render the infromation about that user.

   const { loading, data } = useQuery(userParam ? QUERY_USERS : QUERY_ME, {
      variables: { username: userParam }
    });

    // check the data from whichever query returned the result
    const user = data?.me || data?.user || {};

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
      <Paper user={user} elevation={5} sx={{mt:'5rem'}}>
         <UserInfoCard user={user} />
         <UserInfoTab user={user} />
      </Paper>
      
   )
}

export default Dashboard;