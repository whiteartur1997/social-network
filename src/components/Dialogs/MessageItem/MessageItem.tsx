import React from 'react'
import classes from './MessageItem.module.scss';
import avatar from './../../../img/profile/avatar.jpg';

type MessageType = {
  id: number
  name: string
  description: string
  time: string
}

const MessageItem = (props: MessageType) => {
  return (
    <div className={classes.message} id={String(props.id)}>
      <img src={avatar} className={classes.message__img} />
      <h6 className={classes.message__name}>{props.name}</h6>
      <p className={classes.message__descr}>{props.description}</p>
      <span className={classes.message__time}>{props.time}</span>
    </div>
  )
}

export default MessageItem;