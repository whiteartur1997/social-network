import React from 'react';
import { isPropertySignature } from 'typescript';
import avatar from './../../../../img/batman.png';
import classes from './AddPost.module.scss';

type AddPostType = {
  addPost: (postMessage: string) => void
}

const AddPost: React.FC<AddPostType> = (props) => {

  let newPostTextarea = React.createRef<HTMLTextAreaElement>();

  let addPost = () => {
    if(newPostTextarea.current) {
      let text = newPostTextarea.current.value;
      props.addPost(text);
    }
    // короткая запись
    // (newPostTextarea.current && props.addPost(newPostTextarea.current.value))
    
  }

  return(
    <div className={classes.addPost}>
    <form className={classes.addPost__form}>
      <img className={classes.addPost__avatar} src={avatar} alt={"avatar"} />
      <div>
        <textarea
          ref={newPostTextarea}
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