import React, { ChangeEvent } from 'react';
import avatar from './../../../../assets/img/batman.png';
import classes from './AddPost.module.scss';

type AddPostType = {
  newPostText: string
  addPost: () => void
  updateNewPostText: (newText: string) => void
}

const AddPost: React.FC<AddPostType> = (props) => {

  const updateNewPostTextCallback: (e: ChangeEvent<HTMLTextAreaElement>) => void = (e) => {
    props.updateNewPostText(e.currentTarget.value);
  }

  return (
    <div className={classes.addPost}>
      <form className={classes.addPost__form}>
        <img className={classes.addPost__avatar} src={avatar} alt={"avatar"} />
        <div>
          <textarea
            value={props.newPostText}
            onChange={updateNewPostTextCallback}
            className={classes.addPost__textarea}
            placeholder="What's new?"
          ></textarea>
          <button
            type="button"
            className={classes.addPost__btn}
            onClick={props.addPost}>
            Add Post
        </button>
        </div>
      </form>
    </div>
  )
}

export default AddPost;