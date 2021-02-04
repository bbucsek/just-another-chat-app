import database from './database'
import Room from '../../types/Room'
import Message from '../../types/Message'

let unsubscribeRooms: () => void | undefined | null
let unsubscribeMessages: () => void | undefined | null


function subscribeToRooms(
    callback: (rooms: Room[]) => void) {
    const observer = (snapshot: any) => {
      const rooms = snapshot.docs.map((doc: any) => {
        return { id: doc.id, ...doc.data() }
      })
      callback(rooms)
    }
  
    unsubscribeRooms = database
      .collection('rooms')
      .onSnapshot(observer)
  }

function unsubscribeFromRooms() {
    if (unsubscribeRooms) {
      unsubscribeRooms()
    }
}

function unsubscribeFromMessages() {
  if (unsubscribeMessages) {
    unsubscribeMessages()
  }
}

function subscribeToRoomMessages(
  callback: (messages: Message[]) => void, roomId: string) {
  const observer = (snapshot: any) => {
    const messages = snapshot.docs.map((doc: any) => {
      return { id: doc.id, ...doc.data() }
    })
    callback(messages)
  }

  unsubscribeMessages = database
    .collection('rooms')
    .doc(roomId)
    .collection('messages')
    .onSnapshot(observer)
}

function createRoom(room: Omit<Room, 'id'>) {
  return database.collection('rooms').add(room)
}

export default {
  unsubscribeFromRooms,
  subscribeToRooms,
  createRoom,
  subscribeToRoomMessages,
  unsubscribeFromMessages,
}