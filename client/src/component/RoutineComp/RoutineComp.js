import React from 'react';
import AccordionComp from '../Accordion/Accordion';

const RoutineComp = ({user}) => {
   const {routine} = user;

   // sort the routine based on the days

   return(
      <div>
         {routine.map(rout => {
            return(
               <AccordionComp key={rout._id} rout={rout} />
            )
         })}
      </div>
   );
};

export default RoutineComp;