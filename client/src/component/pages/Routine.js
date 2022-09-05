import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

//dialog component
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';

import {Link, Navigate} from 'react-router-dom';

//import form elements 
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';


// import select button materials
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import Auth from '../../utils/auth';

import { useMutation } from '@apollo/client';
import { ADD_ROUTINE } from '../../utils/mutations'

const Routine = () => {

    const [addRoutine, { error }] = useMutation(ADD_ROUTINE);
    const [formData, setFormData] = useState({ title: '', workoutText: '', day:"", reps:"", sets:"", duration:""});

    const handleChange = (event) => {
        // change the value type depending on the name
        let { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            if(Auth.loggedIn()){
                const {data} = await addRoutine({ variables: {...formData}});
                return <Navigate to='/profile' />;
            } else {
                window.alert('Need to Log in first!')
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
                <h1 className='routine-title'> Share Your Routine! </h1>
                <div>
                    <TextField
                        sx={{width:'35ch'}}
                        name='title'
                        label='Title'
                        placeholder='Cardio'
                        variant='outlined'
                        value={formData.title}
                        onChange={handleChange}
                        required />
                </div>
                {/* Selecting the day */}
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel>Day of the week</InputLabel>
                        <Select
                            sx={{width:'20ch'}}
                            name='day'
                            value={formData.day}
                            label='Day of the week'
                            onChange = {handleChange}
                            required
                            >
                                <MenuItem value='Sunday'>Sunday</MenuItem>
                                <MenuItem value='Monday'>Monday</MenuItem>
                                <MenuItem value='Tuesday'>Tuesday</MenuItem>
                                <MenuItem value='Wednesday'>Wednesday</MenuItem>
                                <MenuItem value='Thursday'>Thursday</MenuItem>
                                <MenuItem value='Friday'>Friday</MenuItem>
                                <MenuItem value='Saturday'>Saturday</MenuItem>

                            </Select>
                    </FormControl>
                </Box>
                {/* entering the reps sets and duration */}
                <div>
                    <TextField
                        sx={{width:'10ch'}}
                        type='number'
                        name="reps"
                        label='Reps'
                        value={formData.reps}
                        onChange={handleChange}
                        />
                    <TextField
                        sx={{width:'10ch', mr:'1.5ch',ml:'1.5ch'}}
                        type='number'
                        name="sets"
                        label='Sets'
                        value={formData.sets}
                        onChange={handleChange}
                        />
                    <TextField
                        sx={{width:'13ch'}}
                        type='number'
                        name="duration"
                        label="Duration"
                        value={formData.duration}
                        // InputProps={{
                        //     endAdornment: <InputAdornment position="end">h</InputAdornment>,
                        // }}
                        onChange={handleChange}
                        />
                </div>
                <div>
                    <TextField
                        sx={{width:'45ch'}}
                        name="workoutText"
                        multiline rows={6}
                        label='Workout Description'
                        placeholder='Tell us about your routine...'
                        variant='outlined'
                        value={formData.workoutText}
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