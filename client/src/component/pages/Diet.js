import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

//dialog component
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';

import {Link} from 'react-router-dom';

//import form elements 
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';


// import select button materials
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import Auth from '../../utils/auth';

import { useMutation } from '@apollo/client';
import { ADD_DIET } from '../../utils/mutations'

const Routine = () => {

    const [addDiet, { error }] = useMutation(ADD_DIET);
    const [formData, setFormData] = useState({ name: '', mealTime: '', calorie:"", details:""});

    // error states
    const [nameError, setNameError] = useState(false);
    const [mealTimeError, setMealTimeError] = useState(false);
   
    const handleChange = (event) => {
        // change the value type depending on the name
        let { name, value } = event.target;
        if (name === 'calorie'){
            if(value) {
               value = parseInt(value);
            }
        }

        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        // handle errors for empty form fields
        setNameError(false);
        setMealTimeError(false);
        

        if (formData.title === '') {
            setNameError(true)
        }
        if (formData.workoutText === '') {
            setMealTimeError(true)
        }
        
        console.log(formData);

        try {
            if(Auth.loggedIn()){
                const {data} = await addDiet({ variables: {...formData}});
                window.location.assign('/dashboard');
            } else {
                handleClickOpen()
            }     
        } catch (e) {
            console.error(e);
        }
    
    };

    //for dialog start
   const [open, setOpen] = useState(false);

   const handleClickOpen = () => {
     setOpen(true);
   };
 
   const handleClose = () => {
     setOpen(false);
   };

   // for dialo ends

    return (

        <Box className='routine-container'>
            <form noValidate style={{width:'80%'}} className='routine-form' onSubmit={handleSubmit}>
                <h1 className='routine-title'> Share Your Diet! </h1>
                <div>
                    <TextField
                        error={nameError}
                        helperText = {nameError && 'Diet Name is required'}
                        sx={{width:'35ch'}}
                        name='name'
                        label='Name'
                        variant='outlined'
                        value={formData.name}
                        onChange={handleChange}
                        required />
                </div>
                {/* Selecting the day */}
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel>Meal Time</InputLabel>
                        <Select
                            sx={{width:'20ch'}}
                            name='mealTime'
                            value={formData.mealTime}
                            label='Meal Time'
                            onChange = {handleChange}
                            required
                            >
                                <MenuItem value='Breakfast'>Breakfast</MenuItem>
                                <MenuItem value='Lunch'>Lunch</MenuItem>
                                <MenuItem value='Dinner'>Dinner</MenuItem>
                                <MenuItem value='Snack'>Snack</MenuItem>
                                

                            </Select>
                    </FormControl>
                </Box>
                {/* entering the reps sets and duration */}
                <div>
                    <TextField
                        sx={{width:'10ch'}}
                        type='number'
                        name="calorie"
                        label='Calorie'
                        value={formData.calorie}
                        onChange={handleChange}
                        />
                </div>
                <div>
                    <TextField
                        
                        sx={{width:'45ch'}}
                        name="details"
                        multiline rows={6}
                        label='Meal Description'
                        placeholder='Tell us about this meal...'
                        variant='outlined'
                        value={formData.details}
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

            <Dialog 
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>{"You must login to submit"}</DialogTitle>
                <DialogActions sx={{display:'flex',justifyContent:'center'}}>
                <Button onClick={handleClose}>Close</Button>
                <Button><Link to='/login'>Log in</Link></Button>
                </DialogActions>
            </Dialog>
        </Box>

    )

}

export default Routine;