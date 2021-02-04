import React, { useEffect } from 'react'
import InputType from '../../types/InputType'
import { useSelector, useDispatch } from 'react-redux'
import { selectRoomName, selectRoomId } from '../../store/slices/rooms/selectors'
import { asyncMessageActions } from '../../store/slices/messages/slice'
import Message from '../../types/Message'
import InputField from '../InputField'
import MessageItem from './MessageItem'
import { useParams } from 'react-router-dom'
import { Container, Header, RoomName, Wrapper, Image } from './styles'
import { selectMessages } from '../../store/slices/messages/selectors'

const Chat = () => {
    const { id } = useParams<{ id: string }>()
    const roomName = useSelector(selectRoomName)
    const roomId = useSelector(selectRoomId)
    const messages = useSelector(selectMessages)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!id) {
            return
        }
        dispatch(asyncMessageActions.subscribeToRoomMessages(id))
        return function cleanUp() {
            dispatch(asyncMessageActions.unsubscribeFromRoomMessages())
        }
    }, [id, dispatch])

    return (
        <Container>
            <Header>
                <Image src={`https://avatars.dicebear.com/api/human/${roomId}.svg`}/>
                <RoomName>
                    {roomName}
                </RoomName>
            </Header>
            <Wrapper>
                {messages?.map((msg: Message) => {
                    return <MessageItem key={msg.id} message={msg} />
                })}
            </Wrapper>
            <InputField placeholder='add new message' type={InputType.MESSAGE}/>
        </Container>
    )
}

export default Chat
