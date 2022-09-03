import React, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField  from '@mui/material/TextField';
import Auth from '../../utils/auth';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import {useMutation} from '@apollo/client';
import {ADD_USER} from '../../utils/mutations'

const SignupPage = () => {
   const [addUser, { error }] = useMutation(ADD_USER);
   const [formData, setFormData] = useState({username: '', email:'', password: '', gender:'', weight:'', dateOfBirth:'', level:'', description:''});
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

   const handleSubmit = async (e) => {
      e.preventDefault();
      // handle error with try/catch method
      console.log(formData);
      try {
         const {data} = await addUser({variables: {...formData}})
         Auth.login(data.addUser.token);
      } catch(e) {
         console.error(e);
      }
      
   };

   return(
      <section className='signup-container'>
         <div className='signup-placeholder'>Text</div>
         <form className='signup-form' onSubmit={handleSubmit}>
            <h1 className='signup-title'>Let's Start!</h1>
            <div>
               <TextField sx={{width:'17ch', mr:'1ch'}} name='username' label='Username' type='text' variant='outlined' onChange={handleChange} value={formData.username} required />

               <TextField sx={{width:'17ch'}} name='password' type='password' label='Password' variant='outlined' onChange={handleChange} value={formData.password} required />
            </div>
            <div>
               <TextField sx={{width:'35ch'}} name='email' type='email' label='Email' variant='outlined' onChange={handleChange}  value={formData.email} required/>
            </div>
            
            <div>
               <TextField sx={{width:'21ch', mr:"1ch"}} name='dateOfBirth' variant='outlined' onChange={handleChange} value={formData.age}  type ="date" required/>

               <TextField sx={{width:'13ch'}} name='weight' label='Weight' variant='outlined' type='number' onChange={handleChange}  value={formData.weight} required/>
            </div>
            {/* Choosing gender */}
            <div>
               <FormControl>
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
               <FormControl>
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
      </section>
      
   )
}

export default SignupPage;