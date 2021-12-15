import React from 'react';
import data from '../../Utils/db/users';
import {Grid, Typography, Divider, Button} from '@mui/material';

function About() {
    console.log(data)
    return (
        <div>
            <Grid container spacing={3} sx={{width: '100vw', marginLeft: 'auto', marginRight: 'auto', marginTop: "5px"}}>
                
                <Grid item xs={12} sm={4} md={3}><Typography variant="h5">Display Name: {data.displayName}</Typography></Grid>
                <Grid item xs={12} sm={4} md={3}><Typography variant="h5">School: {data.school}</Typography></Grid>
                <Grid item xs={12} sm={4} md={3}><Typography variant="h5">City: {data.city}</Typography></Grid>
                <Grid item xs={12} sm={4} md={3}><Typography variant="h5">State: {data.state}</Typography></Grid>
                
            </Grid>
        </div>
    )
}

export default About
