import React from 'react'
import { signOut } from '../../services/firestore/authentication'

const RoomList = () => {

    const logOut = () => {
        signOut()
    }

    return (
        <div onClick={logOut}>
            roomlist
        </div>
    )
}

export default RoomList
