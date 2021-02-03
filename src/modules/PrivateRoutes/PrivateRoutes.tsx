import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import Room from '../../components/Room/Room'
import RoomList from '../../components/RoomList/RoomList'

export default function PrivateRoutes() {
  const location = useLocation()

  return (
    <Switch location={location} key={location.key}>
      <Route exact path="/" component={RoomList} />
      <Route exact path="/rooms/:id" component={Room} />
    </Switch>
  )
}