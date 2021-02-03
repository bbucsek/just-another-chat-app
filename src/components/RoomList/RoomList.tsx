import React from 'react'
import { signOut } from '../../services/firestore/authentication'
import { Container } from './styles'

const RoomList = () => {

    const logOut = () => {
        signOut()
    }

    return (
        <Container>
            roomlist
        </Container>
    )
}

export default RoomList
