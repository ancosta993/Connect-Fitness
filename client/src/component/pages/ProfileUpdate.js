import React, {useState} from 'react';
import {UPDATE_USER} from '../../utils/mutations';
import { useMutation } from '@apollo/client';

import Button from '@mui/material/Button';
import TextField  from '@mui/material/TextField';
import Auth from '../../utils/auth';

// import {useNavigate} from 'react-router-dom';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const ProfileUpdate = () => {
   const [updateUser, { error }] = useMutation(UPDATE_USER);
   const [formData, setFormData] = useState({gender:'', weight:'', dateOfBirth:'', level:'', description:''});


   // use this function to link the state with the form data.
   const handleChange = (event) => {
      let { name, value } = event.target;
      if (name === 'weight') {
         value = parseFloat(value);
      }
      setFormData({
        ...formData,
        [name]: value,
      });
    };

   //declare error states 
   const [genderErr, setgenderErr] = useState(false);
   const [weightErr, setweightErr] = useState(false);
   const [dateOfBirthErr, setdateOfBirthErr] = useState(false);
   const [levelErr, setlevelErr] = useState(false);
   const [descriptionErr, setdescriptionErr] = useState(false);




    const handleSubmit = async (event) => {
      event.preventDefault();

      setgenderErr(false);
      setlevelErr(false);
      setdateOfBirthErr(false);
      setdescriptionErr(false);
      setweightErr(false);

      if(formData.dateOfBirth===''){
         setdateOfBirthErr(true);
      }  
      if(formData.weight===''){
         setweightErr(true);
      }  
      if(formData.gender===''){
         setgenderErr(true);
      }  
      if(formData.level===''){
         setlevelErr(true);
      }  
      if(formData.description===''){
         setdescriptionErr(true);
      }
      // handle error with try/catch method
      if(formData.gender && formData.level && formData.weight && formData.dateOfBirth && formData.description) {
         console.log(formData);
         try {
            const {data} = await updateUser({variables: {...formData}})
            window.location.assign('/dashboard');
         } catch(e) {
            console.error(e);
         }
      } else {
         window.alert('you need to fill in the necessary fields');
      }   
   }

   return(
      <form noValidate className='signup-form' onSubmit={handleSubmit}>
            <h1 className='signup-title'>Update your Information</h1>
            <div>
               <TextField error={dateOfBirthErr} sx={{width:'21ch', mr:"1ch"}} name='dateOfBirth' variant='outlined' onChange={handleChange} value={formData.age}  type ="date" required/>

               <TextField error={weightErr} sx={{width:'13ch'}} name='weight' label='Weight' variant='outlined' type='number' onChange={handleChange}  value={formData.weight} required/>
            </div>
            {/* Choosing gender */}
            <div>
               <FormControl error={genderErr}>
                  <FormLabel>Gender</FormLabel>
                  <RadioGroup
                  name='gender'
                  value={formData.gender}
                  onChange={handleChange}>
                     <FormControlLabel  value='Female' control={<Radio />} label="Female" />
                     <FormControlLabel  value='Male' control={<Radio />} label="Male" />
                     <FormControlLabel  value='Gender Diverse' control={<Radio />} label="Gender Diverse" />
                  </RadioGroup>
               </FormControl>
            </div>
           
            <div>
               <FormControl error={levelErr} >
                  <FormLabel>What do you consider yourself?</FormLabel>
                  <RadioGroup
                  
                  row
                  name='level'
                  value={formData.level}
                  onChange={handleChange}>
                     <FormControlLabel  value='Beginner' control={<Radio />} label="Beginner" />
                     <FormControlLabel  value='Proficient' control={<Radio />} label="Proficient" />
                     <FormControlLabel  value='Casual' control={<Radio />} label="Casual" />
                     <FormControlLabel  value='Expert' control={<Radio />} label="Expert" />
                  </RadioGroup>
               </FormControl>
            </div>
            
            <TextField
               error={descriptionErr}
               name='description'
               value={formData.description}
               onChange={handleChange}
               placeholder='Tell us something about yourself..'
               multiline
               sx={{width:'35ch'}}
               rows={4}
            /> 
            <div>
               <Button type='submit' variant="contained" color="primary">
                  Signup
               </Button>
            </div>
         </form>
   )
};

export default ProfileUpdate;