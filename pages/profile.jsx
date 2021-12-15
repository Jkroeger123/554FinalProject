import React from 'react'
import UserProvider from '../Components/UserContext'
import TopProfile from '../Components/profile/TopProfile'
import Tab from '../Components/profile/Tab'

function profile() {
    return (
        <>
            <UserProvider protectedRoute>
                <TopProfile />
            </UserProvider>
            <Tab />
            
        </>
    )
}

export default profile
