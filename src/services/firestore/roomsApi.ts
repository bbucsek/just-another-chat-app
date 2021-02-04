import database from './database'
import Room from '../../types/Room'

let unsubscribeRooms: () => void | undefined | null

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

export default {
  unsubscribeFromRooms,
  subscribeToRooms,
}