import React, {useState} from 'react';
import Auth from '../../utils/auth';
import { Link, Navigate, useParams} from 'react-router-dom';
import {useQuery} from '@apollo/client';
import {QUERY_USER, QUERY_ME} from '../../utils/queries';
import Paper from '@mui/material/Paper';
import UserInfoCard from '../UserInfoCard';
import UserInfoTab from '../UserInfoTab'

// import the routine diet and blog pages
import RoutineComp from '../RoutineComp/RoutineComp';
import DietComp from '../DietComp/DietComp';

const Dashboard = () => {
   // required states for the Nav Tabs
   const [value, setValue] = useState(0);
   const handleValueChange = (event, newValue) => {
      setValue(newValue);
   }
   // required states for Nav Tabs end

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

    // handle which page to show function
    const handlePageDisplay = () => {
      if(value===0){
         return(
            <RoutineComp user={user}/>
         )
      } else if (value===1) {
         return(
            <DietComp user={user} />
         )
      } else {
         return(<div>Blogs</div>)
      }
   }

   return(
      <Paper user={user} elevation={5} sx={{mt:'5rem'}}>
         <UserInfoCard user={user} />
         <UserInfoTab value={value} handleValueChange ={handleValueChange}/>
         {handlePageDisplay()}
      </Paper>
      
   )
}

export default Dashboard;