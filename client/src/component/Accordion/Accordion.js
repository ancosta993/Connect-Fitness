import React, {useState} from 'react';
import Box from '@mui/material/Box';

// importing accordion components
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionComp = ({rout}) => {
   return(
      <Box sx={{m:'auto', width:'80%'}}>
         <Accordion>
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls='panel1-content'
               id='panel1-headers'
            >
             <Typography sx={{ width: '33%', flexShrink: 0,fontWeight:"bold", fontSize:"1.5rem"}}>
               {rout.title}
            </Typography>
            <Typography sx={{ color: 'text.secondary' , fontSize:"1rem"}}>{rout.day}</Typography>  

            </AccordionSummary>
            <AccordionDetails>
               
               {rout.reps && <Typography sx={{ color: 'text.secondary' }}>{rout.reps} Reps of {rout.sets} Sets</Typography>}
               {rout.duration && <Typography sx={{ color: 'text.secondary' }}>{rout.duration} hours</Typography>}

               <Typography>
                  {rout.workoutText}
               </Typography>
            </AccordionDetails>
         </Accordion>
      </Box>
   )
}

export default AccordionComp;
