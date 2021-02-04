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
    flex-direction: row;
    align-items: center;
    height: 10%;
    border-bottom: solid #adb5bd 1px;
`

export const RoomName = styled.div`
    display: flex;
`

export const Image = styled.img`
    max-width:100%;
    max-height:100%;
    border-radius: 50%;
`