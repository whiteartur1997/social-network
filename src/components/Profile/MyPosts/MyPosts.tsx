import React from "react";
import classes from "./MyPosts.module.scss";
import avatar from "./../../../img/profile/avatar.jpg";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <>
      <div className={classes.posts}>
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
      </div>
      <div className={classes.posts}>
        <Post message={"Hi, how are you?"} likeCount={2} />
        <Post message={"My first steps in react!"} likeCount={4} />
      </div>
    </>
  );
};

export default MyPosts;
