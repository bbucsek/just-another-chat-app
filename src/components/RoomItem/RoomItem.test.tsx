import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import * as themes from '../../theme/theme'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import RoomItem from './RoomItem'
import Room from '../../types/Room'
import { selectRoomId } from '../../store/slices/rooms/selectors'
import userEvent from '@testing-library/user-event'

const testRoom: Room = {
    id: 'test-room-id',
    name: 'test-room-name'
}

jest.mock('../../store/slices/rooms/selectors', () => ({
    selectRoomId: jest.fn(),
}))

const mockHistoryPush = jest.fn()

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}))

const mockStore = configureMockStore([thunk])
const store = mockStore({})

selectRoomId.mockImplementation(() => testRoom.id)

describe('RoomItem component', () => {
  it('renders without crashing', () => {
    render(
        <Provider store={store}>
            <ThemeProvider theme={themes.default}>
                <RoomItem room={testRoom} />
            </ThemeProvider>
        </Provider>
    )
  })

  it('displays the right room name', () => {
    const { getByText } = render(
        <Provider store={store}>
            <ThemeProvider theme={themes.default}>
                <RoomItem room={testRoom} />
            </ThemeProvider>
        </Provider>
    )

    const roomName = getByText(testRoom.name)

    expect(roomName).not.toBeNull()
  })

  it('navigates to the right path when clicked', async () => {
    const { getByText } = render(
        <Provider store={store}>
            <ThemeProvider theme={themes.default}>
                <RoomItem room={testRoom} />
            </ThemeProvider>
        </Provider>
    )

    const roomName = getByText(testRoom.name)
    await userEvent.click(roomName)

    expect(mockHistoryPush).toHaveBeenCalled()
    expect(mockHistoryPush).toHaveBeenCalledWith(`/room/${testRoom.id}`)
  })
})