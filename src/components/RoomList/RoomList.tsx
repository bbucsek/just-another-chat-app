import React from 'react'
import RoomItem from '../RoomItem/RoomItem'
import { Container, LoadingContainer, Loading } from './styles'
import { useSelector } from 'react-redux'
import { selectAllRooms, selectRoomsLoading } from '../../store/slices/rooms/selectors'
import Room from '../../types/Room'
import InputField from '../InputField'
import InputType from '../../types/InputType'

const RoomList = () => {
    const rooms = useSelector(selectAllRooms)
    const loading = useSelector(selectRoomsLoading)

    if (loading) {
        return (
            <LoadingContainer>
                <Loading data-testid="loading-component" />
            </LoadingContainer>
        )
    }

    return (
        <Container>
            <InputField placeholder='create new room' type={InputType.ROOM}/>
            {rooms?.map((room: Room) => {
                return <RoomItem data-testid="room-item" key={room.id} room={room} />
            })}
        </Container>
    )
}

export default RoomList
