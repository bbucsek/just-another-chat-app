import React, { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import {
  selectCurrentUser,
  selectAuthLoading,
} from './store/slices/auth/selectors'
import { authAsyncActions } from './store/slices/auth/slice'
import Login from './components/Login'
import PrivateRoutes from './modules/PrivateRoutes/PrivateRoutes';

function App() {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)

  useEffect(() => {
    dispatch(authAsyncActions.subscribeToAuthChanges())
  }, [dispatch])

  if (currentUser) {
    return <PrivateRoutes />
  }
  
  return <Login />
}

export default App;
