import React from "react";
import classes from "./MyPosts.module.scss";
import AddPost from './AddPost/AddPost';
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <>
      <div className={classes.posts}>
        <AddPost />
      </div>
      <div className={classes.posts}>
        <Post message={"Hi, how are you?"} likeCount={2} />
        <Post message={"My first steps in react!"} likeCount={4} />
      </div>
    </>
  );
};

export default MyPosts;
