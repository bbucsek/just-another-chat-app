import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: inherit;
    display: flex;
    flex-direction: row;
`

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: 3rem;
  margin: 1rem;
`

export const Button = styled.button`
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  border-width: 0;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.lightBlue};
  font-weight: bold;
  max-width: 15rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  &:disabled {
    background-color: ${({ theme }) => theme.disabled};
  }
`

export const BarContainer = styled.div`
  display: flex;
  margin: 1rem;
  flex: 1;
  flex-direction: column;
  width: inherit;
`

export const Bar = styled.div< { ownMessage: boolean } >`
  display: flex;
  margin: 1rem;
  width: 200px;
  height: 50px;
  filter: blur(0.8px);
  background: ${({ ownMessage, theme }) => ownMessage ? theme.colors.blue : theme.colors.darkBlue};
  align-self: ${({ ownMessage }) => ownMessage ? "flex-end" : "flex-start"};
  border-radius: 20px;
`