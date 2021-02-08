import React from 'react'
import RoomItem from '../RoomItem/RoomItem'
import { Container, LoadingContainer, Loading } from './styles'
import { useSelector } from 'react-redux'
import { selectAllRooms } from '../../store/slices/rooms/selectors'
import Room from '../../types/Room'
import InputField from '../InputField'
import InputType from '../../types/InputType'

const RoomList = () => {
    const rooms = useSelector(selectAllRooms)

    if (!rooms) {
        return (
            <LoadingContainer>
                <Loading />
            </LoadingContainer>
        )
    }

    return (
        <Container>
            <InputField placeholder='create new room' type={InputType.ROOM}/>
            {rooms?.map((room: Room) => {
                return <RoomItem key={room.id} room={room} />
            })}
        </Container>
    )
}

export default RoomList
