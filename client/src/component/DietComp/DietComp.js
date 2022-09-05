import React from 'react';
import DietAccordion from '../DietAccordion';

const DietComp = ({user}) => {
   const {diet} = user;
   return(
      <div>
         {diet.map(die => {
            return(
              <DietAccordion key={die._id} die={die} />
            )
         })}
      </div>
   )
};

export default DietComp;