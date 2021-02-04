import AuthState from './slices/auth/types/AuthState'
import MessagesState from './slices/messages/types/MessagesState'
import RoomState from './slices/rooms/types/RoomState'

type RootState = {
  auth: AuthState
  rooms: RoomState
  messages: MessagesState
}

export default RootState