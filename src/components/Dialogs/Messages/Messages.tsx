import React from 'react';
import { NavLink } from 'react-router-dom';
import { MessageItemType } from "../../../redux/dialogsReducer";
import AddMessageForm from './AddMessage/AddMessage';
import MessageItem from './MessageItem/MessageItem';
import classes from './Messages.module.scss';


type MessagesPropsType = {
  messages: Array<MessageItemType>;
  sendMessage: (newMessage: string) => void
}

const Messages: React.FC<MessagesPropsType> = (props) => {
  return (
    <div className={classes.messages__field}>
      <div className={classes.messages__field__title}>
        <h4 className={classes.messages__title}>---Contact---</h4>
        <NavLink className={classes.messages__settings} to={'/settings'}>
          <i className="fas fa-ellipsis-h"></i>
        </NavLink>
      </div>
      <div className={classes.messages__area}>
        {props.messages.map(message => {
          return (
            <MessageItem
              key={message.id}
              message={message}
            />
          )
        })}
      </div>
      <AddMessageForm sendMessage={props.sendMessage} />
    </div>
  )
}

export default Messages;