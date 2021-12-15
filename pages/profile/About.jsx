import React from 'react'
import UserProvider from '../../Components/UserContext'
import TopProfile from '../../Components/profile/TopProfile'

function About() {
    return (
        <>
            <UserProvider protectedRoute>
                <TopProfile />
            </UserProvider>
            
        </>
    )
}

export default About
