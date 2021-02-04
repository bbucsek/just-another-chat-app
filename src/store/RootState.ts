import AuthState from './slices/auth/types/AuthState'
import RoomState from './slices/rooms/types/RoomState'

type RootState = {
  auth: AuthState
  rooms: RoomState
}

export default RootState