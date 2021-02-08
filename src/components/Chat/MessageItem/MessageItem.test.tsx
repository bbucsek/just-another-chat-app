import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import * as themes from '../../../theme/theme'
import MessageItem from './MessageItem'
import Message from '../../../types/Message'
import { selectCurrentUser } from '../../../store/slices/auth/selectors'
import User from '../../../types/User'

const mockStore = configureMockStore([thunk])
const store = mockStore({})

jest.mock('../../../store/slices/auth/selectors', () => ({
    selectCurrentUser: jest.fn(),
}))

const testMessage: Message = {
    id: 'test-message-id',
    user: 'Test User',
    userId: 'test-user-id',
    message: 'This is a test message',
    timeStamp: {
        toDate: () => 'MessageItem.tsx:14 Fri Feb 05 2021 12:19:09 GMT+0100 (közép-európai téli idő)'
    }
}

const testUser: User = {
    name: 'Test User',
    email: 'testuser@gmail.com',
    id: 'uuid01234',
  }  

describe('MessageItem component', () => {
    beforeEach(() => {
      store.clearActions()
    })
  
    it('renders without crashing', () => {
        selectCurrentUser.mockImplementationOnce(() => testUser)
        render(
        <Provider store={store}>
            <ThemeProvider theme={themes.default}>
            <MessageItem message={testMessage}/>
            </ThemeProvider>
        </Provider>
        )
    })
})