import React, { ChangeEvent } from 'react';
import classes from './AddMessage.module.scss';

type AddMessageType = {
  newMessageText: string
  updateNewMessageText: (newText: string) => void
  sendMessage: () => void
}

const AddMessage = (props: AddMessageType) => {

  const updateNewMessageTextCallback = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.updateNewMessageText(e.currentTarget.value);
  }

  const sendMessageCallback = () => {
    props.sendMessage();
  }

  return (
    <div className={classes.newMessage}>
      <textarea
        onChange={updateNewMessageTextCallback}
        value={props.newMessageText}
        placeholder="Write your reply..."
        className={classes.newMessage__textarea}>
      </textarea>
      <div className={classes.newMessage__bottom}>
        <div className={classes.newMessage__attachments}>
          <i className="fas fa-paperclip"></i>
        </div>
        <button
          onClick={sendMessageCallback}
          className={classes.newMessage__btn}
          type="button">Send Message</button>
      </div>
    </div>
  )
}

export default AddMessage;