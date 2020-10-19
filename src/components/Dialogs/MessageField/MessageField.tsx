import React from 'react'
import MessageItem from '../MessageItem/MessageItem';
import classes from './MessageField.module.scss';

const MessageField = () => {
  return (
    <div className={classes.message__field}>
      <div className={classes.message__field__title}>
        <h4 className={classes.message__title}>Joker</h4>
        <a className={classes.message__settings}>
          <i className="fas fa-ellipsis-h"></i>
        </a>
      </div>
      <div className={classes.message__area}>
        <MessageItem name={"Bruce Wayne"}
          description={"Yo bro. Let's rescue this world"}
          time={"13:33 PM"} />
        <MessageItem name={"Yeah Man"}
          description={"Yo bro. Let's rescue this world"}
          time={"13:33 PM"} />
      </div>
    </div>
  )
}

export default MessageField;