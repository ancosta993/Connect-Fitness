import React, {useState} from 'react';
import Paper from '@mui/material/Paper';
import UserInfoCard from '../UserInfoCard';
import UserInfoTab from '../UserInfoTab'

const Dashboard = () => {
   
   return(
      <Paper elevation={5} sx={{mt:'5rem'}}>
         <UserInfoCard/>
         <UserInfoTab />
      </Paper>
      
   )
}

export default Dashboard;