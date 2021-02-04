import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { asyncRoomsActions } from '../../store/slices/rooms/slice'
import Chat from '../../components/Chat/Chat'
import RoomList from '../../components/RoomList/RoomList'
import { Container } from './styles'

const Main = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(asyncRoomsActions.subscribeToRooms())

        return function cleanup() {
            dispatch(asyncRoomsActions.unsubscribeFromRooms())
        }
  }, [dispatch])

    return (
        <Container>
            <RoomList />
            <Chat />
        </Container>
    )
}

export default Main
