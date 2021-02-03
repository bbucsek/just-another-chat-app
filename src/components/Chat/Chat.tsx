import React from 'react'
import Message from '../../types/Message'
import MessageItem from './MessageItem'
import { Container } from './styles'


const msg1: Message = {
    user: 'jozsi',
    message: 'helllllllo asdasdasd',
    date: new Date(),

}

const Chat = () => {
    return (
        <Container>
            <MessageItem message={msg1} />
        </Container>
    )
}

export default Chat
