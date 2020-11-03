import React from 'react';
import MessageItem from './MessageItem/MessageItem';
import classes from './Messages.module.scss';
import { NavLink } from 'react-router-dom';
import { MessageItemType } from '../../../redux/state';
import AddMessage from './AddMessage/AddMessage';


type MessagesType = {
  messages: Array<MessageItemType>;
}

const Messages: React.FC<MessagesType> = (props) => {
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
      <AddMessage />
    </div>
  )
}

export default Messages;