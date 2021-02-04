import React from 'react'
import InputType from '../../types/InputType'
import Message from '../../types/Message'
import InputField from '../InputField'
import MessageItem from './MessageItem'
import { Container, Header, RoomName, Wrapper, Image } from './styles'


const msg1: Message = {
    user: 'jozsi',
    message: 'helllllllo asdasdasd',
    date: new Date(),

}

const roomExample1 = {
    id: 'what1',
    name: 'whatasdasda asdasdasdasdasd1asdas dasdasdasd1asda sdasdasdasd1asdasdasdasdasd1',
    lastMSG: 'whaaat1'
}

const Chat = () => {
    return (
        <Container>
            <Header>
                <Image src={`https://avatars.dicebear.com/api/human/${roomExample1.id}.svg`}/>
                <RoomName>
                    {roomExample1.name}
                </RoomName>
            </Header>
            <Wrapper>
                <MessageItem message={msg1} />
                <MessageItem message={msg1} />
            </Wrapper>
            <InputField placeholder='add new message' type={InputType.MESSAGE}/>
        </Container>
    )
}

export default Chat
