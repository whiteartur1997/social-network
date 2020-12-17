import React from 'react';
import classes from './MessageItem.module.scss';
import {MessageItemType} from "../../../../redux/dialogsReducer";


type MessageItemObj = {
  message: MessageItemType
}

const MessageItem: React.FC<MessageItemObj> = (props) => {
  return (
    <div className={`${classes.message} ${props.message.fromMe ? null : classes.right}`}>
      <img className={classes.message__img} src={props.message.avatar} alt={props.message.name} />
      <h6 className={classes.message__name}>{props.message.name}</h6>
      <p className={classes.message__descr}>{props.message.description}</p>
      <span className={classes.message__time}>{props.message.time}</span>
    </div>
  )
}

export default MessageItem;