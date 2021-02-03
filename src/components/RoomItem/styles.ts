import styled from 'styled-components'

export const Container = styled.div`
    width: inherit;
    display: flex;
    padding: 1rem;
    border-bottom: solid #adb5bd 1px;
    cursor: pointer;
    height: 10%;

    &:hover {
        background-color: ${({ theme }) => theme.colors.disabled}
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    
`

export const Image = styled.img`
    max-width:100%;
    max-height:100%;
    border-radius: 50%;
`

export const RoomTitle = styled.div`
    font-size: 1.2rem;
    text-overflow: ellipsis;
    white-space: nowrap;

`

export const LastMessage = styled.div`
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.lightGrey};
    text-overflow: ellipsis;
    white-space: nowrap;


`