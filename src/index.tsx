import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import store from './store'
import { ThemeProvider } from 'styled-components'
import theme from './theme/'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  place-items: center;
  background-color: #e9ecef;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), radial-gradient(at 50% 0%, rgba(255, 255, 255, 0.10) 0%, rgba(0, 0, 0, 0.50) 50%);
  background-blend-mode: soft-light, screen;
  height: 100vh;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  height: 100vh;
  width: 75vw;
  box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.7);
`

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Container>
        <Router>
          <Wrapper>
            <App />
          </Wrapper>
        </Router>
      </Container>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

