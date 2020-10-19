import React from "react";
import classes from "./AddPost.module.scss";
import avatar from "./../../../../img/profile/avatar.jpg";

const MyPosts = () => {
  return (
    <>
      <div className={classes.addPost}>
        <form className={classes.addPost__form}>
          <img className={classes.addPost__avatar} src={avatar} />
          <div>
            <textarea
              className={classes.addPost__textarea}
              placeholder="What's new?"
            ></textarea>
            <button type="submit" className={classes.addPost__btn}>
              Add Post
              </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MyPosts;
