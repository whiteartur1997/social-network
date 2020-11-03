import React from 'react';
import classes from './AddMessage.module.scss';

const AddMessage = () => {
  let newMessageTextArea = React.createRef<HTMLTextAreaElement>();

  const addMessage = () => {
    if(newMessageTextArea.current) {
      alert(newMessageTextArea.current.value);
    }
  }
  return (
    <div className={classes.newMessage}>
      <textarea
        ref={newMessageTextArea}
        placeholder="Write your reply..."
        className={classes.newMessage__textarea}>
      </textarea>
      <div className={classes.newMessage__bottom}>
        <div className={classes.newMessage__attachments}>
          <i className="fas fa-paperclip"></i>
        </div>
        <button 
          className={classes.newMessage__btn} 
          type="button"
          onClick={addMessage}>Send Message</button>
      </div>
    </div>
  )
}

export default AddMessage;