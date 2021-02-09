import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 75vw;
    height: 100vh;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.blue};
    overflow: scroll;
    height: inherit;
`

export const Header = styled.div`
    display: flex;
    align-items: baseline;
    height: 10%;
    padding: 1rem;
    border-bottom: ${({ theme }) => theme.colors.borderGrey} solid 1px;
    border-top: ${({ theme }) => theme.colors.borderGrey} solid 1px;
`

export const RoomName = styled.div`
    font-weight: bold;
    font-size: 2rem;
    align-self: center;
    padding-left: 1rem;
`

export const Image = styled.img`
    max-width:100%;
    max-height:100%;
    border-radius: 50%;
`