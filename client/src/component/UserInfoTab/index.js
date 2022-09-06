import React, {useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
// getting the icons
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import FoodBankIcon from '@mui/icons-material/FoodBank';


const UserInfoTab = ({value, handleValueChange}) => {

   return(
      <Box style={{display:'flex', justifyContent:'center'}}>
         <Tabs value={value} onChange={handleValueChange} aria-label="icon label tabs">
            <Tab icon={<FitnessCenterIcon />} label="ROUTINE" />
            <Tab icon={<FoodBankIcon/>}  label="DIET" />
         </Tabs>
      </Box>

   )
}


export default UserInfoTab;

