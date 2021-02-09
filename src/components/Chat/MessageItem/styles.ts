import styled from 'styled-components';

export const Container = styled.div<{ ownMessage: boolean }>`
    display: flex;
    margin: 0 2rem;
    position: relative;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: 1rem;
    padding: 1rem;
    border-radius: 10px;
    width: fit-content;
    margin-top: 30px;
    align-self: ${({ ownMessage }) => ownMessage ? "flex-end" : "flex-start"};
`

export const Sender = styled.div`
    position: absolute;
    top: -15px;
    font-weight: 800;
    font-size: xx-small;
    color: ${({ theme }) => theme.colors.darkGrey};
    width: 90%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

export const TimeStamp = styled.div`
    margin-left: 10px;
    font-size: xx-small;
    align-self: flex-end;

`