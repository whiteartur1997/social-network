import React from "react";
import classes from "./Post.module.scss";
import { NavLink } from "react-router-dom";
import {PostType} from "../../../../redux/profileReducer";




type PostObjType = {
  post: PostType
}


const Post: React.FC<PostObjType> = (props) => {
  return (
    <article className={classes.post}>
      <div className={classes.post__info}>
        <div>
          <img className={classes.post__info__avatar} src={props.post.avatar} alt={props.post.name} />
        </div>
        <div>
          <NavLink className={classes.post__info__link} to='/profile'>
            <h6 className={classes.post__info__title}>{props.post.name}</h6>
          </NavLink>
          <span className={classes.post__info__time}>{props.post.time}</span>
        </div>
      </div>
      <div className={classes.post__content}>
        <p className={classes.post__content__text}>
          {props.post.message}
        </p>
      </div>
      <div className={classes.post__likes}>
        <i className="far fa-heart"></i>
        <span className={classes.post__likes__text}>{props.post.likeCount} likes</span>
      </div>
    </article>
  );
}

export default Post;
