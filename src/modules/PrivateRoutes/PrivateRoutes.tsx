import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import Room from '../../components/Chat/Chat'
import Main from '../Main'

export default function PrivateRoutes() {
  const location = useLocation()

  return (
    <Switch location={location} key={location.key}>
      <Route exact path="/" component={Main} />
      <Route exact path="/rooms/:id" component={Room} />
    </Switch>
  )
}