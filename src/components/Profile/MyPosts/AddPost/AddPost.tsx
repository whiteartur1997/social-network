import React, { ChangeEvent } from 'react';
import { addPostAC, updateNewPostTextAC } from '../../../../redux/profileReducer';
import { ActionsTypes } from '../../../../redux/store';
import avatar from './../../../../img/batman.png';
import classes from './AddPost.module.scss';

type AddPostType = {
  newPostText: string
  dispatch: (action: ActionsTypes) => void
}

const AddPost: React.FC<AddPostType> = (props) => {

  const updateNewPostTextCallback: (e: ChangeEvent<HTMLTextAreaElement>) => void = (e) => {
    // props.updateNewPostMessage(e.currentTarget.value); было раньше до диспатча
    props.dispatch(updateNewPostTextAC(e.currentTarget.value));
  }

  const addPost: () => void = () => {
    // props.addPost(); было раньше до диспатча
    props.dispatch(addPostAC());
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
            onClick={addPost}>
            Add Post
        </button>
        </div>
      </form>
    </div>
  )
}

export default AddPost;