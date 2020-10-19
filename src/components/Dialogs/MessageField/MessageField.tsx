import React from 'react'
import MessageItem from '../MessageItem/MessageItem';
import classes from './MessageField.module.scss';

const MessageField = () => {

  const messageData = [
    { id: 1, name: "Bruce Wayne", description: "Yo bro. Let's rescue this world", time: "13:33 AM" },
    { id: 2, name: "Aquaman", description: "Let's go for swimming...", time: "8:13 AM" },
    { id: 3, name: "Cat Woman", description: "Kiss kiss", time: "10:23 AM" },
    { id: 4, name: "Joker", description: "Why you so serious?", time: "10:54 AM" },
  ];

  return (
    <div className={classes.message__field}>
      <div className={classes.message__field__title}>
        <h4 className={classes.message__title}>Joker</h4>
        <a className={classes.message__settings}>
          <i className="fas fa-ellipsis-h"></i>
        </a>
      </div>
      <div className={classes.message__area}>
        <MessageItem
          id={messageData[0].id}
          name={messageData[0].name}
          description={messageData[0].description}
          time={messageData[0].time} />
        <MessageItem
          id={messageData[1].id}
          name={messageData[1].name}
          description={messageData[1].description}
          time={messageData[1].time} />
      </div>
    </div>
  )
}

export default MessageField;