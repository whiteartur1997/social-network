import React from "react";
import classes from "./MyPosts.module.scss";
import Post from "./Post/Post";
import avatar from './../../../img/batman.png';
import { PostsType } from "../Profile";

const MyPosts: React.FC<PostsType> = (props) => {
  return (
    <>
      <div className={classes.posts}>
        <div className={classes.addPost}>
          <form className={classes.addPost__form}>
            <img className={classes.addPost__avatar} src={avatar} alt={"avatar"} />
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
        {props.postsData.map(post => <Post key={post.id} post={post} />)}
      </div>
    </>
  );
};

export default MyPosts;
