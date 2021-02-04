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


const msg1: Message = {
    user: 'jozsi',
    message: 'helllllllo asdasdasd',
    timeStamp: new Date(),
}

const Chat = () => {
    const { id } = useParams<{ id: string }>()
    const roomName = useSelector(selectRoomName)
    const roomId = useSelector(selectRoomId)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!id) {
            return
        }
        dispatch(asyncMessageActions.subscribeToRoomMessages(id))
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
                <MessageItem message={msg1} />
                <MessageItem message={msg1} />
            </Wrapper>
            <InputField placeholder='add new message' type={InputType.MESSAGE}/>
        </Container>
    )
}

export default Chat
