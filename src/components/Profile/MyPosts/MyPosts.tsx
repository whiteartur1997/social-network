import React from "react";
import classes from "./MyPosts.module.scss";
import AddPost from './AddPost/AddPost';
import Post from "./Post/Post";

const MyPosts = () => {

  const postData = [
    { id: 1, content: "My first steps in react!", likeCount: 23 },
    { id: 2, content: "Watsup", likeCount: 4 },
  ];

  return (
    <>
      <div className={classes.posts}>
        <AddPost />
      </div>
      <div className={classes.posts}>
        {postData.map(post => <Post
          id={post.id}
          content={post.content}
          likeCount={post.likeCount}
        />
        )}
      </div>
    </>
  );
};

export default MyPosts;
