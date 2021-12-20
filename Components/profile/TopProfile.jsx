import React from 'react'
import { useUser } from "../UserContext";
import { Avatar } from "@material-ui/core";
import {Typography, Button} from '@mui/material';
import Logout from '../LogOutButton'

function TopProfile() {

    const { user } = useUser();

    return (
        <>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={{display: 'flex', justifyContent: 'start'}}>
                    <Avatar
                        alt={user.displayName}
                        src={user.photoURL}
                        style={{ width: "20vh", height: "20vh", marginLeft: '40px', marginTop: "40px"}}
                    />
                    <Typography variant="h1" sx={{marginLeft: "20px", marginTop: "80px", fontSize: "40px"}}>
                        {user.displayName}
                    </Typography>
                </div>
                <div style={{marginRight: '60px', marginTop:'90px'}}>
                    <Logout />
                </div>
            </div>
            
        </>
        
    )
}

export default TopProfile
