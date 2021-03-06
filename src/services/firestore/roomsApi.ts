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
      const data = { id: doc.id, ...doc.data() }
      const msg: Message = {
        id: data.id,
        user: data.user,
        userId: data.userId,
        message: data.message,
        timeStamp: new Date(data.timeStamp?.toDate()).toLocaleTimeString(),
      } 
      return msg
    })
    callback(messages)
  }

  unsubscribeMessages = database
    .collection('rooms')
    .doc(roomId)
    .collection('messages')
    .orderBy('timeStamp', 'asc')
    .onSnapshot(observer)
}

function createRoom(room: Omit<Room, 'id'>) {
  return database.collection('rooms').add(room)
}

async function addMessage(message: Omit<Message, 'id'>, roomId: string) {
  database
    .collection('rooms')
    .doc(roomId)
    .collection('messages')
    .add(message)
}

export default {
  unsubscribeFromRooms,
  subscribeToRooms,
  createRoom,
  subscribeToRoomMessages,
  unsubscribeFromMessages,
  addMessage,
}