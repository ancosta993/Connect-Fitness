import React, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField  from '@mui/material/TextField';
import Auth from '../../utils/auth';

//dialog components
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';

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

    //for dialog start
    const [open, setOpen] =useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    // for dialog ends

   // declare all the error state
   const [usernameErr, setusernameErr] = useState(false);
   const [emailErr, setemailErr] = useState(false);
   const [passwordErr, setpasswordErr] = useState(false);
   const [genderErr, setgenderErr] = useState(false);
   const [weightErr, setweightErr] = useState(false);
   const [dateOfBirthErr, setdateOfBirthErr] = useState(false);
   const [levelErr, setlevelErr] = useState(false);
   const [descriptionErr, setdescriptionErr] = useState(false);

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

      setusernameErr(false);
      setemailErr(false);
      setgenderErr(false);
      setlevelErr(false);
      setdateOfBirthErr(false);
      setpasswordErr(false);
      setdescriptionErr(false);
      setweightErr(false);

      if(formData.username===''){
         setusernameErr(true);
      }
      if(formData.password===''){
         setpasswordErr(true);
      }  
      if(formData.email===''){
         setemailErr(true);
      }  
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
      if(formData.username && formData.email && formData.password && formData.gender && formData.level && formData.weight && formData.dateOfBirth && formData.description) {
         console.log(formData);
         try {
            const {data} = await addUser({variables: {...formData}})
            Auth.login(data.addUser.token);
         } catch(e) {
            console.error(e);
         }
      } else {
         handleClickOpen();
      }
      
   };

   return(
      <section className='signup-container'>
         <form noValidate className='signup-form' onSubmit={handleSubmit}>
            <h1 className='signup-title'>Begin Your Fitness Journey!</h1>
            <div>
               <TextField error={usernameErr} sx={{width:'17ch', mr:'1ch'}} name='username' label='Username' type='text' variant='outlined' onChange={handleChange} value={formData.username} required />

               <TextField error={passwordErr} sx={{width:'17ch'}} name='password' type='password' label='Password' variant='outlined' onChange={handleChange} value={formData.password} required />
            </div>
            <div>
               <TextField error={emailErr} sx={{width:'35ch'}} name='email' type='email' label='Email' variant='outlined' onChange={handleChange}  value={formData.email} required/>
            </div>
            
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
         <Dialog 
            open={open}
            onClose={handleClose}
         >
            <DialogTitle>{"You must enter all the highlighted fields!"}</DialogTitle>
            <DialogActions sx={{display:'flex',justifyContent:'center'}}>
               <Button onClick={handleClose}>Close</Button>
            </DialogActions>
         </Dialog>
      </section>
      
   )
}

export default SignupPage;