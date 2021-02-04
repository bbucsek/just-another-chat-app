import React from 'react'
import Room from '../../types/Room'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Container, Image, RoomTitle, Wrapper } from './styles'
import { roomsActions } from '../../store/slices/rooms/slice'

type RoomProps = {
    room: Room
}

const RoomItem = ({ room }: RoomProps) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const openRoom = () => {
        dispatch(roomsActions.SET_CURRENT_ROOM(room))
        history.push(`/room/${room.id}`)
    }

    return (
        <Container onClick={openRoom}>
            <Image src={`https://avatars.dicebear.com/api/human/${room.id}.svg`}/>
            <Wrapper>
                <RoomTitle>
                    {room.name}
                </RoomTitle>
            </Wrapper>
        </Container>
    )
}

export default RoomItem
