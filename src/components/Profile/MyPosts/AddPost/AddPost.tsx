import React, { ChangeEvent } from 'react';
import avatar from './../../../../img/batman.png';
import classes from './AddPost.module.scss';

type AddPostType = {
  newPostMessage: string
  dispatch: () => {}
}

const AddPost: React.FC<AddPostType> = (props) => {
  const updateNewPostMessageCallback: (e: ChangeEvent<HTMLTextAreaElement>) => void = (e) => {
    props.updateNewPostMessage(e.currentTarget.value);
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
            onChange={updateNewPostMessageCallback}
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