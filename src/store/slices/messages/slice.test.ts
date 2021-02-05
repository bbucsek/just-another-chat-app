import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import roomsApi from '../../../services/firestore/roomsApi'
import Message from '../../../types/Message'
import messageSliceReducer, { asyncMessageActions, messageActions } from './slice'
import { selectCurrentUser } from '../auth/selectors'
import { selectRoomId } from '../rooms/selectors'
import Room from '../../../types/Room'
import User from '../../../types/User'

jest.mock('../../../services/firestore/roomsApi')
const firestoreApi = roomsApi as jest.Mocked<typeof roomsApi>

jest.mock('../auth/selectors', () => ({
    selectCurrentUser: jest.fn(),
  }))
  
jest.mock('../rooms/selectors', () => ({
    selectRoomId: jest.fn(),
}))

const mockStore = configureMockStore([thunk])
const store = mockStore({})

const testMessage: Message = {
    id: 'test-room-id',
    user: 'Test User',
    userId: 'test-user-id',
    message: 'Test Message',
    timeStamp: '09:45'
}

const testRoom: Room = {
    id: 'test-room-id',
    name: 'test-room-name'
}

const testUser: User = {
  name: 'Test User',
  email: 'testuser@gmail.com',
  id: 'uuid01234',
}

const state = {
    messages: null,
    errorMessage: null,
    loading: {
        getMessages: false,
    },
}

describe('Message slice', () => {
    beforeEach(() => {
      Object.values(firestoreApi).forEach((fn) => {
        fn.mockReset()
      })
      store.clearActions()
    })

    describe('subscribe to database', () => {
        it('set_messages action set the state with correct value', async () => {
          const messages = [testMessage]
    
          const nextState = messageSliceReducer(state, messageActions.SET_MESSAGES(messages))
    
          expect(nextState.messages).toEqual(messages)
        })
    })

    describe('create message async action', () => {
        it('dispatches the right action when create a new message', async () => {
            selectCurrentUser.mockImplementationOnce(() => testUser)
            selectRoomId.mockImplementationOnce(() => testRoom.id)

            await store.dispatch(
                asyncMessageActions.addMessage('test_room_name')
            )
            const actions = store.getActions()

            expect(actions[0].type).toEqual('messages/addMessage/pending')
            expect(actions[1].type).toEqual('messages/addMessage/fulfilled')
        })

        it('dispatches error action when there is no current user', async () => {
            selectCurrentUser.mockImplementationOnce(() => null)
            selectRoomId.mockImplementationOnce(() => testRoom.id)

            await store.dispatch(
                asyncMessageActions.addMessage('test_room_name')
            )
            const actions = store.getActions()

            expect(actions[0].type).toEqual('messages/addMessage/pending')
            expect(actions[1].type).toEqual('messages/addMessage/rejected')
        })

        it('dispatches error action when there is no current room', async () => {
            selectCurrentUser.mockImplementationOnce(() => testUser)
            selectRoomId.mockImplementationOnce(() => null)

            await store.dispatch(
                asyncMessageActions.addMessage('test_room_name')
            )
            const actions = store.getActions()

            expect(actions[0].type).toEqual('messages/addMessage/pending')
            expect(actions[1].type).toEqual('messages/addMessage/rejected')
        })

        it('it returns the right payload when create a new message', async () => {
            selectCurrentUser.mockImplementationOnce(() => testUser)
            selectRoomId.mockImplementationOnce(() => testRoom.id)

            await store.dispatch(
                asyncMessageActions.addMessage('test_room_name')
            )
            const actions = store.getActions()

            expect(actions[1].payload).toEqual('message_added')
        })
    })
})