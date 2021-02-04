import { combineReducers } from '@reduxjs/toolkit'
import auth from './auth/slice'
import rooms from './rooms/slice'

export default combineReducers({ auth, rooms })