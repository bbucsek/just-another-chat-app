import React from 'react'
import Chat from '../../components/Chat/Chat'
import RoomList from '../../components/RoomList/RoomList'
import { Container } from './styles'

const Main = () => {
    return (
        <Container>
            <RoomList />
            <Chat />
        </Container>
    )
}

export default Main
