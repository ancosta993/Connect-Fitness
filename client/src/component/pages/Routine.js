import React, { useState } from 'react';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box'
// import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Routine = () => {

    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
    const handleSubmit = 

    return (

        <section className='routine-container'>
            <form className='routine-form'>
                <h1 className='routine-title'> Share Your Routine! </h1>
                <div>
                    <TextField 
                    sx={{ width: '35ch' }} 
                    name='title' 
                    label='Title' 
                    placeholder='Cardio' 
                    variant='outlined' 
                    onChange={handleChange} 
                    required />
                </div>
                <div>
                    <TextField 
                    sx={{ width: '35ch'}} 
                    id="outlined-multiline-static" 
                    multiline rows={6} 
                    label='Workout Routine' 
                    placeholder='Tell us about your routine...' 
                    variant='outlined' 
                    onChange={handleChange} 
                    required />
                </div>
                <div>
                    <Button 
                    type='submit' 
                    variant="contained" 
                    color="primary">
                        
                        Finish
                    </Button>
                </div>
            </form>
        </section>

    )

}

export default Routine;