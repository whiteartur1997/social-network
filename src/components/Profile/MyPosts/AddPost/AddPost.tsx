import React, { ChangeEvent } from 'react';
import avatar from './../../../../img/batman.png';
import classes from './AddPost.module.scss';

type AddPostType = {
  newPostMessage: string
  addPost: () => void
  onNewPostMessageChange: (message: string) => void
}

const AddPost: React.FC<AddPostType> = (props) => {
  const onNewPostMessageChangeCallback: (e: ChangeEvent<HTMLTextAreaElement>) => void = (e) => {
    props.onNewPostMessageChange(e.currentTarget.value);
  }

  const addPost: () => void = () => {
    props.addPost();
  }
  // короткая запись
  // (newPostTextarea.current && props.addPost(newPostTextarea.current.value)
  return (
    <div className={classes.addPost}>
      <form className={classes.addPost__form}>
        <img className={classes.addPost__avatar} src={avatar} alt={"avatar"} />
        <div>
          <textarea
            value={props.newPostMessage}
            onChange={onNewPostMessageChangeCallback}
            className={classes.addPost__textarea}
            placeholder="What's new?"
          ></textarea>
          <button
            type="button"
            className={classes.addPost__btn}
            onClick={addPost}>
            Add Post
        </button>
        </div>
      </form>
    </div>
  )
}

export default AddPost;