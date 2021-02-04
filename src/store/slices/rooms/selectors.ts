import RootState from '../../RootState'

export const selectAllRooms = (state: RootState) => state.rooms.rooms

export const selectRoomName = (state: RootState) => state.rooms.currentRoom?.name

export const selectRoomId = (state: RootState) => state.rooms.currentRoom?.id

export const selectRoomsLoading = (state: RootState) => state.rooms.loading