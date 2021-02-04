import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import RoomState from './types/RoomState'
import RootState from '../../RootState'
import Room from '../../../types/Room'
import roomsApi from '../../../services/firestore/roomsApi'

const initialState: RoomState = {
    rooms: null,
    errorMessage: null,
    loading: {
        createRoom: false,
        getRooms: false,
        joinRoom: false,
    },
}

type RoomData = {
    name: string,
    id: string,
}

export const createRoom = createAsyncThunk<
string,
string,
{ state: RootState }
>('rooms/createRoom', async (roomName, thunkApi) => {
    const newRoom: Omit<Room, 'id'> = {
        name: roomName
    }
    try {
        roomsApi.createRoom(newRoom)
        return 'room_created'
    } catch (error) {
        return thunkApi.rejectWithValue('cannot_create_room')
    }
})

const slice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {
      SET_ROOMS: (state, action: PayloadAction<Room[] | null>) => {
        state.rooms = action.payload
        state.loading.getRooms = false
      },
    },
  })
  
export const subscribeToRooms = createAsyncThunk(
    'rooms/subscribeToRooms', 
    async (payload, thunkApi) => {
        try {
            roomsApi.subscribeToRooms((rooms: Room[]) => {
                thunkApi.dispatch(slice.actions.SET_ROOMS(rooms))
            })
            return 'subscribed_to_rooms'
        } catch (error) {
        return thunkApi.rejectWithValue('failed_to_subscribe_to_rooms')
        }
    }
)

export const unsubscribeFromRooms = createAsyncThunk(
    'songs/unsubscribefromrooms',
    async (_playload, thunkApi) => {
      try {
        roomsApi.unsubscribeFromRooms()
        return 'unsubscribed_from_rooms'
      } catch (error) {
        return thunkApi.rejectWithValue('failed_to_unsubscribe_from_rooms')
      }
    }
  )

export default slice.reducer

export const roomsActions = slice.actions

export const asyncRoomsActions = {
    subscribeToRooms,
    unsubscribeFromRooms,
    createRoom,
}