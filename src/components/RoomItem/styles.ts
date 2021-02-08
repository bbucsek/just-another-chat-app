import styled from 'styled-components'

export const Container = styled.div<{ active: boolean}>`
    display: flex;
    padding: 0.5rem;
    border-bottom: solid #adb5bd 1px;
    cursor: pointer;
    height: 10%;
    background-color: ${({ active, theme }) => active ? theme.colors.activeRoom : theme.colors.white};


    &:hover {
        background-color: ${({ theme }) => theme.colors.disabled};
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    justify-content: center;
    align-content: center;
`

export const Image = styled.img`
    max-width:100%;
    max-height:100%;
    border-radius: 50%;
`

export const RoomTitle = styled.div`
    font-size: 1.2rem;
    overflow:hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 150px;
`

export const LastMessage = styled.div`
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.lightGrey};
    overflow:hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 150px;


`