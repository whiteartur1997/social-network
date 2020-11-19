import { ActionsTypes, DialogsPageType } from "./state";

const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {
  switch (action.type) {
    case "SEND-MESSAGE": {
      const newMessage = {
        id: 3,
        name: "Bruce Wayne",
        description: state.newMessageText,
        time: `${new Date().getHours()}:${new Date().getMinutes()}`,
        fromMe: true,
        avatar: require('./../img/batman.png')
      }
      state.messages.push(newMessage);
      state.newMessageText = "";
    }
      return state;

    case "UPDATE-NEW-POST-MESSAGE": {
      state.newMessageText = action.newText;
    }
      return state;

    default:
      return state;
  }
}

export const sendMessageAC = () => {
  return {
    type: "SEND-MESSAGE"
  } as const;
}

export const updateNewMessageTextAC = (newText: string) => {
  return {
    type: "UPDATE-NEW-POST-MESSAGE",
    newText: newText
  } as const;
}

export default dialogsReducer;
