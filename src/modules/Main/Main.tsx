import React from 'react'
import Chat from '../../components/Chat/Chat'
import RoomList from '../../components/RoomList/RoomList'
import { Wrapper } from './styles'

const Main = () => {
    return (
        <Wrapper>
            <RoomList />
            <Chat />
        </Wrapper>
    )
}

export default Main
