import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import InputType from '../../types/InputType'
import { Container, Form } from './styles'
import { asyncRoomsActions } from '../../store/slices/rooms/slice'
import { asyncMessageActions } from '../../store/slices/messages/slice'

type InputProps = {
    placeholder: string
    type: InputType
}

const InputField = ({placeholder, type}: InputProps) => {

    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    const submitValue = (e: React.FormEvent) => {
        e.preventDefault()
        if (!value) {
            return
        }
        if (type === InputType.ROOM) {
            dispatch(asyncRoomsActions.createRoom(value))
        }
        if (type === InputType.MESSAGE) {
            dispatch(asyncMessageActions.addMessage(value))
        }
        setValue('')
    }

    return (
        <Container>
            <Form>
                <input
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder={placeholder}
                    type='text' 
                />
                <button 
                    type='submit' 
                    onClick={submitValue}
                    data-testid="input-form-button" 
                />
            </Form>
        </Container>
    )
}

export default InputField
