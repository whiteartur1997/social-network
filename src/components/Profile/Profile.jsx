import React from 'react';
import classes from './Profile.module.scss';
import coverImage from './../../img/profile/cover.jpg';
import avatar from './../../img/profile/avatar.jpg';

const Profile = () => {
  return (
    <div className={classes.profile}>
      <div className={classes.profile__up}>
        <div className={classes.profile__cover}>
          <img className={classes.profile__cover__img} src={coverImage} alt="cover" />
        </div>
        <div className={classes.profile__header}>
          <div className={classes.profile__info__wrapper}>
            <a className={classes.profile__info__link} href="#">
              <img className={classes.profile__info__img} src={avatar} alt="avatar" />
            </a>
            <div className={classes.profile__info__down}>
              <h3 className={classes.profile__info__title}>Bruce Wayne</h3>
              <span className={classes.profile__info__location}>Kyiv, Ukraine</span>
            </div>
          </div>
        </div>
        <ul className={classes.profile__header__list} >
          <li className={classes.profile__header__item}>
            <a className={`${classes.profile__header__link} ${classes.active}`} href="#">Timeline</a>
          </li>
          <li className={classes.profile__header__item}>
            <a className={classes.profile__header__link} href="#">About</a>
          </li>
          <li className={classes.profile__header__item}>
            <a className={classes.profile__header__link} href="#">Friends</a>
          </li>
          <li className={classes.profile__header__item}>
            <a className={classes.profile__header__link} href="#">Photos</a>
          </li>
          <li className={classes.profile__header__item}>
            <a className={classes.profile__header__link} href="#">Videos</a>
          </li>
          <li className={classes.profile__header__item}>
            <a className={classes.profile__header__link} href="#">About</a>
          </li>
        </ul>
      </div>
      <div className={classes.posts}>
        <div className={classes.addPost}>
          <form className={classes.addPost__form}>
            <img className={classes.addPost__avatar} src={avatar} />
            <div>
            <textarea className={classes.addPost__textarea} placeholder="What's new?"></textarea>
            <button type="submit" className={classes.addPost__btn}>Add Post</button>
            </div>
          </form>
        </div>
        <article className={classes.post}>
          <div className={classes.post__info}>
            <div>
              <img className={classes.post__info__avatar} src={avatar}/>
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, exercitationem?
            </p>
          </div>
          <div className={classes.post__likes}>
            <i className="far fa-heart"></i>
            <span className={classes.post__likes__text}>0 likes</span>
          </div>
        </article>
        <article className={classes.post}>
          <div className={classes.post__info}>
            <div>
              <img className={classes.post__info__avatar} src={avatar}/>
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, exercitationem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non mollitia amet vero recusandae sequi atque odit, fuga, earum, provident velit ratione similique? Corporis illum ipsam ullam beatae perspiciatis error! Pariatur quasi libero minima sunt voluptatibus sequi quam, animi labore nam ducimus atque itaque earum necessitatibus vel temporibus sit similique magnam.
            </p>
          </div>
          <div className={classes.post__likes}>
            <i className="far fa-heart"></i>
            <span className={classes.post__likes__text}>0 likes</span>
          </div>
        </article>
      </div>
    </div >
  )
}

export default Profile;