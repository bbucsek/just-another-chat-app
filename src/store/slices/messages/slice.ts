import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import MessagesState from './types/MessagesState'
import RootState from '../../RootState'
import roomsApi from '../../../services/firestore/roomsApi'
import Message from '../../../types/Message'

const initialState: MessagesState = {
    messages: null,
    errorMessage: null,
    loading: {
        getMessages: false,
    },
}

const slice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        SET_MESSAGES: (state, action: PayloadAction<Message[] | null>) => {
            state.messages = action.payload
            state.loading.getMessages = false
        },
    }
})

export const subscribeToRoomMessages = createAsyncThunk<
  string,
  string,
  { state: RootState }
>('messages/joinRoom', async (roomId, thunkApi) => {
    try {
        roomsApi.subscribeToRoomMessages((messages: Message[]) => {
          thunkApi.dispatch(slice.actions.SET_MESSAGES(messages))
        }, roomId)
        return 'subscribed_to_room'
      } catch (error) {
        return thunkApi.rejectWithValue('failed_to_subscribe_to_room')
      }
})

export const unsubscribeFromRoomMessages = createAsyncThunk(
  'songs/unsubscribeFromRoomMessages',
  async (_playload, thunkApi) => {
    try {
      roomsApi.unsubscribeFromMessages()
      return 'unsubscribed_from_room_messages'
    } catch (error) {
      return thunkApi.rejectWithValue('failed_to_unsubscribe_from_room_messages')
    }
  }
)


export default slice.reducer

export const messageActions = slice.actions

export const asyncMessageActions = {
    subscribeToRoomMessages,
    unsubscribeFromRoomMessages,
}