import React from 'react'
import Message from '../../../types/Message'
import { Container } from './styles'

type MessageProps = {
    message: Message
}

const MessageItem = ({ message }: MessageProps) => {
    return (
        <Container>
            {message.message}
        </Container>
    )
}

export default MessageItem
