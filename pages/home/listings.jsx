import React from 'react'
import Card from '../../Components/Cards/ListingCard'
import {Grid, Typography, Divider, Button} from '@mui/material';
import data from '../../Utils/db/listings'
import LocationOnIcon from '@mui/icons-material/LocationOn';

function listings() {
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Typography variant="h4" component="div" sx={{color: '#2A265A', marginLeft: '50px', marginTop: '35px', marginBottom: '25px'}}>
                    Nearby Listings
                </Typography>
                <Button variant="text" sx={{color: '#A92C68', marginRight: '50px', marginTop: '35px', marginBottom: '35px'}}>
                    <LocationOnIcon />
                    <Typography variant="h5">
                        School
                    </Typography>
                </Button>
            </div>
            
            <Divider sx={{ borderColor: "#C0C0C0" }} />
 
            <Grid container spacing={6} sx={{width: '100vw', marginLeft: 'auto', marginRight: 'auto', marginTop: "5px"}}>
                
                {data.map(l => <Grid item xs={12} sm={4} md={3}><Card data={l} key={l.id} /></Grid>)}
                
            </Grid>
            
        </div>
    )
}

export default listings
