import React from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../../store/slices/auth/selectors'
import Message from '../../../types/Message'
import { Container, Sender, TimeStamp } from './styles'

type MessageProps = {
    message: Message
}

const MessageItem = ({ message }: MessageProps) => {
    const currentUser = useSelector(selectCurrentUser)
    const ownMessage = currentUser?.id === message.userId

    return (
        <Container ownMessage={ownMessage}>
            <Sender>{message.user}</Sender>
            {message.message}
            <TimeStamp>
                {new Date(message.timeStamp?.toDate()).toLocaleTimeString()}
            </TimeStamp>
        </Container>
    )
}

export default MessageItem
