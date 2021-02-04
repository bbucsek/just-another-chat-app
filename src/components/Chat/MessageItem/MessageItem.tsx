import React from 'react'
import Message from '../../../types/Message'
import { Container, Sender, TimeStamp } from './styles'

type MessageProps = {
    message: Message
}

const MessageItem = ({ message }: MessageProps) => {

    return (
        <Container>
            <Sender>{message.user}</Sender>
            {message.message}
            <TimeStamp>
                {new Date(message.timeStamp).toLocaleDateString()}
            </TimeStamp>
        </Container>
    )
}

export default MessageItem
