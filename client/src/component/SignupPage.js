import * as React from 'react';
import Button from '@mui/material/Button';
import TextField  from '@mui/material/TextField';
import { styled } from '@mui/material/styles'

const SignupPage = () => {
  
   return(
      <section className='signup-container'>
         <div className='signup-placeholder'>Text</div>
         <form className='signup-form'>
            <h1 className='signup-title'>Let's Start!</h1>
            <div>
               <TextField sx={{width:'35ch'}} label='username' variant='outlined' required />
            </div>
            <div>
               <TextField sx={{width:'35ch'}} label='password' variant='outlined' required />
            </div>
            <div>
               <TextField sx={{width:'35ch'}} label='email' variant='outlined' required/>
            </div>
            <div>
               <Button variant="contained" color="primary">
                  Signup
               </Button>
            </div>
            
         </form>
      </section>
      
   )
}

export default SignupPage;