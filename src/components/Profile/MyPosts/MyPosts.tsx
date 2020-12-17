import React from "react";
import AddPost from "./AddPost/AddPost";
import classes from "./MyPosts.module.scss";
import Post from "./Post/Post";
import {PostType} from "../../../redux/profileReducer";

type MyPostsType = {
  posts: PostType[]
  newPostText: string
  addPost: () => void
  updateNewPostText: (newText: string) => void
}

const MyPosts: React.FC<MyPostsType> = (props) => {
  return (
    <>
      <div className={classes.posts}>
        <AddPost
          newPostText={props.newPostText}
          addPost={props.addPost}
          updateNewPostText={props.updateNewPostText}
        />
      </div>
      <div className={classes.posts}>
        {props.posts.map(post => <Post key={post.id} post={post} />)}
      </div>
    </>
  );
};

export default MyPosts;
