import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import firebase from 'firebase/app'
import User from '../../../types/User'
import AuthState from './types/AuthState'
import { subscriber } from '../../../services/firestore/authentication'

const initialState: AuthState = {
  currentUser: null,
  errorMessage: null,
  loading: true,
}

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    SET_CURRENT_USER: (state, action: PayloadAction<User | null>) => {
      state.currentUser = action.payload
      state.loading = false
    },
  },
})

const subscribeToAuthChanges = createAsyncThunk(
  'auth/subscribeToAuthChanges',
  async (payload, thunkApi) => {
    const observer = (user: firebase.User) => {
      if (user) {
        const userNewState: User = {
          name: user.displayName || 'no_name',
          email: user.email || 'no_email',
          id: user.uid,
        }
        thunkApi.dispatch(slice.actions.SET_CURRENT_USER(userNewState))
      } else {
        thunkApi.dispatch(slice.actions.SET_CURRENT_USER(null))
      }
    }
    try {
      await subscriber(observer)
    } catch (error) {
      thunkApi.rejectWithValue('auth_error')
    }
  }
)

export default slice.reducer

export const authActions = slice.actions

export const authAsyncActions = { subscribeToAuthChanges }