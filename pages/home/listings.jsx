import React from 'react'
import Card from '../../Components/ListingCard/Card'
import {Grid} from '@mui/material';
import data from '../../Utils/db/listings'

function listings() {
    return (
        <div>
            <h1>Nearby Listings</h1>

 
            <Grid container spacing={6} sx={{width: '100vw', marginLeft: 'auto', marginRight: 'auto'}}>
                
                {data.map(l => <Grid item xs={12} sm={4} md={3}><Card data={l} key={l.id} /></Grid>)}
                
            </Grid>
            
        </div>
    )
}

export default listings
