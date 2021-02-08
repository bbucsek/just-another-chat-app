import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import * as themes from '../../theme/theme'
import Message from '../../types/Message'
import User from '../../types/User'
import { selectCurrentUser } from '../../store/slices/auth/selectors'
import Room from '../../types/Room'
import userEvent from '@testing-library/user-event'
import InputField from './InputField'
import InputType from '../../types/InputType'

const mockStore = configureMockStore([thunk])
const store = mockStore({})

const placeholder = 'add message'

describe('Chat component', () => {
    beforeEach(() => {
      store.clearActions()
    })
  
    it('renders without crashing', () => {
        render(
        <Provider store={store}>
            <ThemeProvider theme={themes.default}>
                <InputField placeholder={placeholder} type={InputType.MESSAGE}/>
            </ThemeProvider>
        </Provider>
        )
    })

    it('dispatch the correct action when the input type is message', async () => {
        const { queryByText, getByPlaceholderText, getByTestId  } = render(
        <Provider store={store}>
            <ThemeProvider theme={themes.default}>
                <InputField placeholder={placeholder} type={InputType.MESSAGE}/>
            </ThemeProvider>
        </Provider>
        )

        const messageInputField = getByPlaceholderText(placeholder)
        const messageInputButton = getByTestId('input-form-button')
        await userEvent.type(messageInputField, 'new-test-message')
        await userEvent.click(messageInputButton)

        const actions = store.getActions()
        expect(actions[0].type).toBe('messages/addMessage/pending')
    })

    it('dispatch the correct action when the input type is room', async () => {
        const { queryByText, getByPlaceholderText, getByTestId  } = render(
        <Provider store={store}>
            <ThemeProvider theme={themes.default}>
                <InputField placeholder={placeholder} type={InputType.ROOM}/>
            </ThemeProvider>
        </Provider>
        )

        const messageInputField = getByPlaceholderText(placeholder)
        const messageInputButton = getByTestId('input-form-button')
        await userEvent.type(messageInputField, 'new-test-message')
        await userEvent.click(messageInputButton)

        const actions = store.getActions()
        expect(actions[0].type).toBe('rooms/createRoom/pending')
    })

    it('dispatch with the correct data', async () => {
        const { queryByText, getByPlaceholderText, getByTestId  } = render(
        <Provider store={store}>
            <ThemeProvider theme={themes.default}>
                <InputField placeholder={placeholder} type={InputType.MESSAGE}/>
            </ThemeProvider>
        </Provider>
        )

        const messageInputField = getByPlaceholderText(placeholder)
        const messageInputButton = getByTestId('input-form-button')
        await userEvent.type(messageInputField, 'new-test-message')
        await userEvent.click(messageInputButton)

        const actions = store.getActions()
        expect(actions[0].meta.arg).toBe('new-test-message')
    })
})