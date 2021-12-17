import React from 'react'
import UserProvider from "../../Components/UserContext";
import { useRouter } from "next/router";
import ChatComponent from '../../Components/Chat/ChatComponent';

function DirectMessage() {

    const { query } = useRouter();

    return (
        <UserProvider protectedRoute>
            <ChatComponent selectedChat={query.id} />
        </UserProvider>
    )
}

export default DirectMessage
