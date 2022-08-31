import React, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField  from '@mui/material/TextField';

const SignupPage = () => {
   const [formData, setFormData] = useState({username: '', email:'', password: ''});

   const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormData({
        ...formData,
        [name]: value,
      });
    };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
   }

  
   return(
      <section className='signup-container'>
         <div className='signup-placeholder'>Text</div>
         <form className='signup-form' onSubmit={handleSubmit}>
            <h1 className='signup-title'>Let's Start!</h1>
            <div>
               <TextField sx={{width:'35ch'}} name='username' label='username' variant='outlined' onChange={handleChange} value={formData.username} required />
            </div>
            <div>
               <TextField sx={{width:'35ch'}} name='password' label='password' variant='outlined' onChange={handleChange} value={formData.password} required />
            </div>
            <div>
               <TextField sx={{width:'35ch'}} name='email' label='email' variant='outlined' onChange={handleChange}  value={formData.email} required/>
            </div>
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