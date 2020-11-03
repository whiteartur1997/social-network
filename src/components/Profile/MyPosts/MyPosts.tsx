import React from "react";
import classes from "./MyPosts.module.scss";
import Post from "./Post/Post";
import { PostsType } from "../Profile";
import AddPost from "./AddPost/AddPost";

const MyPosts: React.FC<PostsType> = (props) => {
  return (
    <>
      <div className={classes.posts}>
        <AddPost addPost={props.addPost} />
      </div>
      <div className={classes.posts}>
        {props.postsData.map(post => <Post key={post.id} post={post} />)}
      </div>
    </>
  );
};

export default MyPosts;
