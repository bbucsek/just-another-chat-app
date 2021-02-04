import React, { useEffect } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Room from '../../components/Chat/Chat'
import { asyncRoomsActions } from '../../store/slices/rooms/slice'
import { Container } from './styles'
import RoomList from '../../components/RoomList'
import Chat from '../../components/Chat/Chat'

export default function PrivateRoutes() {
  const location = useLocation()
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
      <Switch location={location} key={location.key}>
        <Route exact path="/room/:id" component={Chat} />
      </Switch>
    </Container>
  )
}