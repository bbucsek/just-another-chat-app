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

export const Header = styled.div`
    display: flex;
    height: 10%;
    border-bottom: solid #adb5bd 1px;
`

export const LoadingContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const Loading = styled.div`
    border: 16px solid #f3f3f3; 
    border-top: 16px solid ${({ theme }) => theme.colors.blue}; 
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
}
`