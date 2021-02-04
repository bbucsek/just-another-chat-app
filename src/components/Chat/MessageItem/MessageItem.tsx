import React from 'react'
import Message from '../../../types/Message'
import { Container, Sender, TimeStamp } from './styles'

type MessageProps = {
    message: Message
}

const MessageItem = ({ message }: MessageProps) => {

    console.log(new Date(message.timeStamp?.toDate()).toUTCString())
    return (
        <Container>
            <Sender>{message.user}</Sender>
            {message.message}
            <TimeStamp>
                {new Date(message.timeStamp?.toDate()).toUTCString()}
            </TimeStamp>
        </Container>
    )
}

export default MessageItem
