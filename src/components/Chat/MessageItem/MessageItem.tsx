import React from 'react'
import firebase from 'firebase'
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
                {new Date(message.timeStamp?.toDate()).toLocaleTimeString()}
            </TimeStamp>
        </Container>
    )
}

export default MessageItem
