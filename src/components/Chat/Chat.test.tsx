import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import * as themes from '../../theme/theme'
import Message from '../../types/Message'
import User from '../../types/User'
import { selectRoomName, selectRoomId } from '../../store/slices/rooms/selectors'
import { selectMessages } from '../../store/slices/messages/selectors'
import { selectCurrentUser } from '../../store/slices/auth/selectors'
import Chat from './Chat'
import Room from '../../types/Room'
import userEvent from '@testing-library/user-event'

const mockStore = configureMockStore([thunk])
const store = mockStore({})

jest.mock('../../store/slices/rooms/selectors', () => ({
    selectRoomName: jest.fn(),
    selectRoomId: jest.fn(),
}))

jest.mock('../../store/slices/messages/selectors', () => ({
    selectMessages: jest.fn(),
}))

jest.mock('../../store/slices/auth/selectors', () => ({
    selectCurrentUser: jest.fn(),
}))

const testRoom: Room = {
    id: 'test-room-id',
    name: 'test-room-name',
}

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

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        id: 'test-room-id',
    })
}))

selectRoomName.mockImplementation(() => testRoom.name)
selectRoomId.mockImplementation(() => testRoom.id)
selectMessages.mockImplementation(() => [testMessage])

describe('Chat component', () => {
    beforeEach(() => {
      store.clearActions()
    })
  
    it('renders without crashing', () => {
        render(
        <Provider store={store}>
            <ThemeProvider theme={themes.default}>
            <Chat />
            </ThemeProvider>
        </Provider>
        )
    })

    it('dispatches the subscribe action when component mounts', () => {
        const { unmount } = render(
        <Provider store={store}>
            <ThemeProvider theme={themes.default}>
            <Chat />
            </ThemeProvider>
        </Provider>
        )

        unmount()
        const actions = store.getActions()
        expect(actions[0].type).toEqual('messages/subscribeToMessages/pending')
    })

    it('dispatches actions to unsubscribe from songs and room on unmounting', () => {
        const { unmount } = render(
        <Provider store={store}>
            <ThemeProvider theme={themes.default}>
            <Chat />
            </ThemeProvider>
        </Provider>
        )

        unmount()
        const actions = store.getActions()
        expect(actions[actions.length - 1].type).toEqual('messages/unsubscribeFromRoomMessages/pending')
    })

    it('dispatch the right action when the user send a message', async () => {
        const { queryByText, getByPlaceholderText, getByTestId  } = render(
        <Provider store={store}>
            <ThemeProvider theme={themes.default}>
            <Chat />
            </ThemeProvider>
        </Provider>
        )

        const messageInputField = getByPlaceholderText('add new message')
        const messageInputButton = getByTestId('input-form-button')
        await userEvent.type(messageInputField, 'new-test-message')
        await userEvent.click(messageInputButton)

        const actions = store.getActions()
        expect(actions[1].type).toBe('messages/addMessage/pending')
    })

    it('dispatch the action with the right data when the user send a message', async () => {
        const { queryByText, getByPlaceholderText, getByTestId  } = render(
        <Provider store={store}>
            <ThemeProvider theme={themes.default}>
            <Chat />
            </ThemeProvider>
        </Provider>
        )

        const messageInputField = getByPlaceholderText('add new message')
        const messageInputButton = getByTestId('input-form-button')
        await userEvent.type(messageInputField, 'new-test-message')
        await userEvent.click(messageInputButton)

        const actions = store.getActions()
        expect(actions[1].meta.arg).toBe('new-test-message')
    })
})