import React from 'react'
import { Grid, Typography, Divider, Button } from "@mui/material";
import {useRouter} from 'next/router';

function Layout() {

    const router = useRouter();

    return (
        <div>
            <div style={{paddingBottom: "30px"}}>
                <Typography variant='h1' sx={{fontSize: "50px", marginTop: "30px", marginLeft: "60px"}}>
                    Welcome to U-Connect
                </Typography>
                <div style={{marginTop: "20px", marginLeft: "60px", marginRight: "60px"}}>
                    <Typography variant="p" sx={{fontSize: "20px"}}>
                        Our unique platform connects you with students that go to the same universtity as you, where 
                        you can shop items that they are selling in your area. 
                        You can filter your experience based on the school you go to, and view listings that YOUR 
                        classmates have posted!
                    </Typography>
                </div>

                <Button onClick={ ()=> router.push('/listings')} variant="contained" sx={{background: "#A92C68", marginLeft: "55px", marginTop: "20px"}}>
                    Go to Listings
                </Button>
                
            </div>
            
            <div style={{background:"#2A265A", paddingTop: "1px"}}>
                <Typography variant="h2" sx={{color: "#FFFFFF", fontSize: "35px", marginTop: "20px", marginLeft: "60px"}}>
                    How does it work?
                </Typography>
                <div style={{marginTop: "20px", marginLeft: "60px", marginRight: "60px"}}>
                    <Typography variant="p" sx={{color: "#FFFFFF", fontSize: "20px"}}>
                        Your peers upload listings of things they want to sell, like furniture, old school 
                        supplies, art, anything really! Anyone that also goes to their school can view these 
                        listings.
                    </Typography>
                    <Typography variant="h3" sx={{color: "#FFFFFF", fontSize: "30px", marginTop: "30px", marginBottom: "15px"}}>
                        Our site offers two different experiences:
                    </Typography>
                    <div style={{ display: "flex", justifyContent: "space-between", marginLeft: "30px"}}>
                        <Typography variant="h1" sx={{color: "#FFFFFF"}}>
                            1
                        </Typography>
                        <Typography variant="p" sx={{color: "#FFFFFF", fontSize: "20px", marginTop: "30px", marginLeft:"30px"}}>
                        Those who are signed in can view listings, get in contact with the lister in order to go 
                        forward in the purchasing process, can favorite listings to save them and view them later, 
                        post their own listings, and so much more!
                        </Typography>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginLeft: "30px"}}>
                        <Typography variant="h1" sx={{color: "#FFFFFF"}}>
                            2
                        </Typography>
                        <Typography variant="p" sx={{color: "#FFFFFF", fontSize: "20px", marginTop: "30px", marginLeft:"30px"}}>
                        Those who are not logged in can only view listings. They will still be able to filter their 
                        views by school, however they will have no way to puruse any listings they are interested in.
                        </Typography>
                    </div>
                </div>

            </div>

            <div>
                <Typography variant="h2" sx={{fontSize: "35px", marginTop: "30px", marginLeft: "60px", marginBottom: "30px"}}>
                    What do you do when you want to actually purchase something that was listed?
                </Typography>
                <div style={{marginTop: "20px", marginLeft: "60px", marginRight: "60px"}}>
                    <Typography variant="p" sx={{fontSize: "20px"}}>
                        First, you should contact the lister to get any extra information about the product 
                        that is not already listed on the site.
                    </Typography>
                </div>
                <div style={{marginTop: "20px", marginLeft: "60px", marginRight: "60px"}}>
                    <Typography variant="p" sx={{fontSize: "20px"}}>
                        Next, you could negotiate a price with the lister and see if they will accept a price 
                        other than the one listed.
                    </Typography>
                </div>
                <div style={{marginTop: "20px", marginLeft: "60px", marginRight: "60px"}}>
                    <Typography variant="p" sx={{fontSize: "20px"}}>
                        Lastly, if they agree to the price, you can set up a meeting spot to pick up the item and pay for it.
                    </Typography>
                </div>
                <div style={{marginTop: "20px", marginLeft: "60px", marginRight: "60px"}}>
                    <Typography variant="h3" sx={{fontSize: "40px"}}>
                        {`It's that simple!`}
                    </Typography>
                </div>
            </div>

        </div>
    )
}

export default Layout
