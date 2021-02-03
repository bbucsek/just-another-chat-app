import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: 3rem;

`

export const Button = styled.button`
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  border-width: 0;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.lightBlue};
  font-weight: bold;
  min-width: 5rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  &:disabled {
    background-color: ${({ theme }) => theme.disabled};
  }
`