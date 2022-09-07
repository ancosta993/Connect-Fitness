import React, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField  from '@mui/material/TextField';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';

import Auth from '../../utils/auth';
import {useMutation} from '@apollo/client';
import {LOGIN_USER} from '../../utils/mutations'


const LoginPage = () => {
   const [login, { error }] = useMutation(LOGIN_USER);
   const [formData, setFormData] = useState({email:'', password: ''});

   //for dialog start
   const [open, setOpen] =useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // for dialo ends

   // declare all the errors
   const [emailErr, setEmailErr] = useState(false);
   const [passErr, setPassErr] = useState(false);

   
   // use this function to link the state with the form data.
   const handleChange = (event) => {
      const { name, value } = event.target;  
      setFormData({
        ...formData,
        [name]: value,
      });
    };

   const handleSubmit = async (e) => {
      e.preventDefault();
      // handle error with try/catch method
      setEmailErr(false);
      setPassErr(false);

      if(formData.email === ''){
         setEmailErr(true);
      };

      if(formData.password === ''){
         setPassErr(true);
      }
      
      if (formData.email && formData.password){
         try {
         const {data} = await login({variables: {...formData}})
         Auth.login(data.login.token);
         } catch(e) {
            console.error(e);
         }
         // reset the form by clearing value
         setFormData({
            email: '',
            password: ''
         })
      } else {
         handleClickOpen()
      }
      
   };
  
   return(
      <section className='signup-container'>
         <div className='signup-placeholder'>"A champion is simply someone who didn't give up when they wanted to" - Tom Landry</div>
         <form noValidate className='signup-form' onSubmit={handleSubmit}>
            <h1 className='signup-title'>Let's Start!</h1>
            <div>
               <TextField error={emailErr} sx={{width:'35ch'}} name='email' label='email' variant='outlined' onChange={handleChange} type='email'  value={formData.email} required/>
            </div>

            <div>
               <TextField error={passErr} sx={{width:'35ch'}} name='password' label='password' variant='outlined' type='password' onChange={handleChange} value={formData.password} required />
            </div>
            
            <div>
               <Button type='submit' variant="contained" color="primary">
                  Login
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

export default LoginPage;