import Room from "../../../../types/Room";

type RoomState = {
    rooms: Room[] | null
    errorMessage: string | null
    loading: {
        createRoom: boolean
        getRooms: boolean
        joinRoom: boolean
      }
}

export default RoomState