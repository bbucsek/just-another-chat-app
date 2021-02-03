import React from 'react'
import RoomItem from '../Room/RoomItem'
import { Container } from './styles'

const RoomList = () => {

    const roomExample1 = {
        id: 'what1',
        name: 'what1',
        lastMSG: 'whaaat1'
    }

    const roomExample2 = {
        id: 'what2',
        name: 'what2',
        lastMSG: 'whaaat1'
    }

    const roomExample3 = {
        id: 'what3',
        name: 'what3',
        lastMSG: 'whaaat1'
    }

    return (
        <Container>
            <RoomItem room={roomExample1}/>
            <RoomItem room={roomExample2}/>
            <RoomItem room={roomExample3}/>
        </Container>
    )
}

export default RoomList
