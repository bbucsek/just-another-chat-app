import React, { useState } from 'react'
import { Container, Form } from './styles'

const InputField = () => {

    const [message, setMessage] = useState('')

    const submitMessage = (e: React.FormEvent) => {
        e.preventDefault()
        alert(message)
    }

    return (
        <Container>
            <Form>
                <input
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder='type a message'
                    type='text' 
                />
                <button type='submit' onClick={submitMessage} >send a message</button>
            </Form>
        </Container>
    )
}

export default InputField
