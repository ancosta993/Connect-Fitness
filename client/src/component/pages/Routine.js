import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

const Routine = () => {

    return (

        <>
            <Box component='div' sx={{ pt: "5em", pb: "30em", backgroundColor: 'white' }}>
                <Grid container>
                    <Grid item xs={12}>
                        <Box component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '30ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            border='1px solid black'>
                            <div>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Title"
                                    placeholder="Cardio"
                                />
                            </div>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>

    )

}

export default Routine;