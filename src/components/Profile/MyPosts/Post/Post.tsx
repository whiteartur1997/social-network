import React from "react";
import classes from "./Post.module.scss";
import avatar from "./../../../../img/profile/avatar.jpg";

type PostType = {
  id: number
  content: string
  likeCount: number
}

const Post: React.FC<PostType> = (props) => {
  return (
    <article className={classes.post} id={String(props.id)}>
      <div className={classes.post__info}>
        <div>
          <img className={classes.post__info__avatar} src={avatar} />
        </div>
        <div>
          <a className={classes.post__info__link}>
            <h6 className={classes.post__info__title}>Bruce Wayne</h6>
          </a>
          <span className={classes.post__info__time}>19 hours ago</span>
        </div>
      </div>
      <div className={classes.post__content}>
        <p className={classes.post__content__text}>
          {props.content}
        </p>
      </div>
      <div className={classes.post__likes}>
        <i className="far fa-heart"></i>
        <span className={classes.post__likes__text}>{props.likeCount} likes</span>
      </div>
    </article>
  );
}

export default Post;
