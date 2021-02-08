import React from 'react'
import Room from '../../types/Room'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Image, RoomTitle, Wrapper } from './styles'
import { roomsActions } from '../../store/slices/rooms/slice'
import { selectRoomId } from '../../store/slices/rooms/selectors'

type RoomProps = {
    room: Room
}

const RoomItem = ({ room }: RoomProps) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const currentRoomId = useSelector(selectRoomId)
    const activeRoom = currentRoomId === room.id

    const openRoom = () => {
        dispatch(roomsActions.SET_CURRENT_ROOM(room))
        history.push(`/room/${room.id}`)
    }

    return (
        <Container
            onClick={openRoom}
            active={activeRoom}
        >
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
