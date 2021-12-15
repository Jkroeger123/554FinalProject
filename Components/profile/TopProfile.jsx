import React from 'react'
import { useUser } from "../UserContext";
import { Avatar } from "@material-ui/core";
import {Typography} from '@mui/material';

function TopProfile() {

    const { user } = useUser();

    return (
        <>
            <div style={{display: 'flex', justifyContent: 'start'}}>
                <Avatar
                    alt={user.displayName}
                    src={user.photoURL}
                    style={{ width: "20vh", height: "20vh", marginLeft: '40px', marginTop: "40px"}}
                />
                <Typography variant="h4" sx={{marginLeft: "20px", marginTop: "80px"}}>
                    {user.displayName}
                </Typography>
            </div>
        </>
        
    )
}

export default TopProfile
