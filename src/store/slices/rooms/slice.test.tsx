import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import roomsApi from '../../../services/firestore/roomsApi'
import Room from '../../../types/Room'
import roomSliceReducer, { asyncRoomsActions, roomsActions } from './slice'

jest.mock('../../../services/firestore/roomsApi')
const firestoreApi = roomsApi as jest.Mocked<typeof roomsApi>

const mockStore = configureMockStore([thunk])
const store = mockStore({})

const testRoom: Room = {
    id: 'test-room-id',
    name: 'test-room-name'
}

const state = {
    rooms: [testRoom],
    currentRoom: null,
    errorMessage: null,
    loading: {
        createRoom: false,
        getRooms: false,
        joinRoom: false,
    }
}

describe('Room slice', () => {
    beforeEach(() => {
      Object.values(firestoreApi).forEach((fn) => {
        fn.mockReset()
      })
      store.clearActions()
    })

    describe('subscribe to database', () => {
        it('set_rooms action set the state with correct value', async () => {
          const rooms = [testRoom]
    
          const nextState = roomSliceReducer(state, roomsActions.SET_ROOMS(rooms))
    
          expect(nextState.rooms).toEqual([testRoom])
        })

        it('set_current_room action set the state with correct value', async () => {
            const room = testRoom
      
            const nextState = roomSliceReducer(state, roomsActions.SET_CURRENT_ROOM(room))
      
            expect(nextState.currentRoom).toEqual(room)
        })
    })

    describe('createRoom async action', () => {
        it('dispatches the right actions when create a new room', async () => {
            await store.dispatch(
              asyncRoomsActions.createRoom('test_room_name')
            )
      
            const actions = store.getActions()
            expect(actions[0].type).toEqual('rooms/createRoom/pending')
            expect(actions[1].type).toEqual('rooms/createRoom/fulfilled')
          })

        it('returns the right payload when create a new room', async () => {
            await store.dispatch(
              asyncRoomsActions.createRoom('test_room_name')
            )
      
            const actions = store.getActions()
            expect(actions[1].payload).toEqual('room_created')
          })
    })
    
})