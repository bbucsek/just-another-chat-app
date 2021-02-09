import React from 'react'
import { signIn } from '../../services/firestore/authentication'
import { Button } from './styles'
import { Container, Title, BarContainer, Bar, Wrapper } from './styles'

export default function Login() {


  const handleClick = () => {
    signIn()
  }

  return (
    <Container>
      <Wrapper>
        <Title>
          just another chat app
        </Title>
        <Button onClick={handleClick}>Sing up with google</Button>
      </Wrapper>
      <BarContainer>
        <Bar ownMessage={true} />
        <Bar ownMessage={false} />
        <Bar ownMessage={false} />
        <Bar ownMessage={true} />
        <Bar ownMessage={false} />
        <Bar ownMessage={true} />
        <Bar ownMessage={false} />
        <Bar ownMessage={true} />
      </BarContainer>
    </Container>)
}