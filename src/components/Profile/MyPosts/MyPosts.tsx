import React from "react";
import { ProfileDataType } from "../Profile";
import AddPost from "./AddPost/AddPost";
import classes from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts: React.FC<ProfileDataType> = (props) => {
  return (
    <>
      <div className={classes.posts}>
        <AddPost
          newPostMessage={props.profileData.newPostMessage}
          dispatch={props.dispatch}
        />
      </div>
      <div className={classes.posts}>
        {props.profileData.posts.map(post => <Post key={post.id} post={post} />)}
      </div>
    </>
  );
};

export default MyPosts;
