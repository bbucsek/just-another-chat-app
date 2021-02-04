import RootState from '../../RootState'

export const selectAllRooms = (state: RootState) => state.rooms.rooms

export const selectRoomsLoading = (state: RootState) => state.rooms.loading