import React from 'react'
import { render } from '@testing-library/react'
import Login from './Login'
import { ThemeProvider } from 'styled-components'
import * as themes from '../../theme/theme'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const mockStore = configureMockStore([thunk])
const store = mockStore({})

describe('Login component', () => {
  it('renders without crashing', () => {
    render(
        <Provider store={store}>
            <ThemeProvider theme={themes.default}>
                <Login />
            </ThemeProvider>
        </Provider>
    )
  })
})