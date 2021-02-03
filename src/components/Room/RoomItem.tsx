import React from 'react'
import Room from '../../types/Room'
import { Container, Image, RoomTitle, LastMessage, Wrapper } from './styles'

type RoomProps = {
    room: Room
}

const RoomItem = ({ room }: RoomProps) => {
    return (
        <Container>
            <Image src={`https://avatars.dicebear.com/api/human/${room.id}.svg`}/>
            <Wrapper>
                <RoomTitle>
                    {room.name}
                </RoomTitle>
                <LastMessage>
                    {room.lastMSG}
                </LastMessage>
            </Wrapper>
        </Container>
    )
}

export default RoomItem
