import React from 'react';
import { sendMessageAC, updateNewMessageTextAC } from '../../../redux/dialogsReducer';
import { StoreType } from '../../../redux/store';
import Messages from './Messages';

type MessagesContainerType = {
  store: StoreType
}

const MessagesContainer: React.FC<MessagesContainerType> = (props) => {
  
  function updateNewMessageText(newText: string) {
    props.store.dispatch(updateNewMessageTextAC(newText));
  }

  function sendMessage() {
    props.store.dispatch(sendMessageAC());
  }

  return <Messages
    messages={props.store.getState().dialogsPage.messages}
    newMessageText={props.store.getState().dialogsPage.newMessageText}
    updateNewMessageText={updateNewMessageText}
    sendMessage={sendMessage}
    />
}

export default MessagesContainer;