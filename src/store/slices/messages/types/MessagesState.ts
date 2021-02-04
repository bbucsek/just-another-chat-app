import Message from "../../../../types/Message"

type MessagesState = {
    messages: Message[] | null
    errorMessage: string | null
    loading: {
        getMessages: boolean
      }
}

export default MessagesState