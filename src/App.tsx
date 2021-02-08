import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {
  selectCurrentUser,
  selectAuthLoading,
} from './store/slices/auth/selectors'
import { authAsyncActions } from './store/slices/auth/slice'
import Login from './components/Login'
import PrivateRoutes from './modules/PrivateRoutes/PrivateRoutes';
import styled from 'styled-components'

const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Loading = styled.div`
  border: 16px solid  ${({ theme }) => theme.colors.disabled}; 
  border-top: 16px solid ${({ theme }) => theme.colors.blue}; 
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
}
`

function App() {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  const loading = useSelector(selectAuthLoading)

  useEffect(() => {
    dispatch(authAsyncActions.subscribeToAuthChanges())
  }, [dispatch])

  if (loading) {
    return (
      <LoadingContainer>
          <Loading data-testid="loading-component" />
      </LoadingContainer>
    )
  }

  if (currentUser) {
    return <PrivateRoutes />
  }
  
  return <Login />
}

export default App;
