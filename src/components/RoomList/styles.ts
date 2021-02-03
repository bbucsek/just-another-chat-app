import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 25vw;
    height: 100vh;
    overflow: scroll;
    background-color: ${({ theme }) => theme.colors.white};
    border-right: solid #adb5bd 1px;

`