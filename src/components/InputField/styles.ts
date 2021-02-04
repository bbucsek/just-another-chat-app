import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10%;
    border-top: solid #adb5bd 1px;
`

export const Form = styled.form`
    flex: 1;
    display: flex;

    > input {
        flex: 1;
        border-radius: 30px;
        padding: 10px;
        border: none;
    }

    > button {
        display: none;
    }
`