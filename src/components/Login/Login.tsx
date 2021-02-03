import React from 'react'
import { signIn } from '../../services/firestore/authentication'
import { Button } from './styles'
import { Wrapper, Title } from './styles'

export default function Login() {


  const handleClick = () => {
    signIn()
  }

  return (
    <Wrapper>
      <Title>
        just another chat app
      </Title>
      <Button onClick={handleClick}>Sing up with google</Button>
    </Wrapper>)
}