import styled from 'styled-components'

export const Container = styled.div`
    width: inherit;
    display: flex;
    padding: 1rem;
    border-bottom: solid #adb5bd 1px;
    cursor: pointer;

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
    width: 15%;
    border-radius: 50%;
`

export const RoomTitle = styled.div`
    font-size: 2rem;
`

export const LastMessage = styled.div`
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.lightGrey}

`