import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10%;
    border-bottom: ${({ theme }) => theme.colors.borderGrey} solid 1px;
`

export const Form = styled.form`
    flex: 1;
    display: flex;

    > input {
        flex: 1;
        border-radius: 30px;
        padding: 10px;
        border: none;

        &:focus-visible {
            outline: none;
    }
    }

    > button {
        display: none;
    }
`