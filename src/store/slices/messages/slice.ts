import firebase from 'firebase'
import { selectCurrentUser } from './../auth/selectors';
import { selectRoomId } from './../rooms/selectors';
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

export const addMessage = createAsyncThunk<
string,
string,
{ state: RootState }
>('messages/addMessage', async (message, thunkApi) => {
    const state = thunkApi.getState()
    const currentUser = selectCurrentUser(state)
    const roomId = selectRoomId(state)
    if (!roomId || !currentUser) {
      return thunkApi.rejectWithValue('noo_room_id')
    }
    const nemMessage: Omit<Message, 'id'> = {
        user: currentUser.name,
        message,
        timeStamp: firebase.firestore.FieldValue.serverTimestamp()
    }
    try {
        roomsApi.addMessage(nemMessage, roomId)
        return 'message_added'
    } catch (error) {
        return thunkApi.rejectWithValue('cannot_add_message')
    }
})

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
>('messages/subscribeToMessages', async (roomId, thunkApi) => {
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
  'messages/unsubscribeFromRoomMessages',
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
    addMessage,
}