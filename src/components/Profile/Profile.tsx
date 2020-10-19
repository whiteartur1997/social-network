import React from 'react';
import classes from './Profile.module.scss';
import coverImage from './../../img/profile/cover.jpg';
import avatar from './../../img/profile/avatar.jpg';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={classes.profile}>
            <div className={classes.profile__up}>


                {/*<div className={classes.profile__cover}>*/}
                {/*    <img className={classes.profile__cover__img} src={coverImage} alt="cover"/>*/}
                {/*</div>*/}
                {/*<div className={classes.profile__header}>*/}
                {/*    <div className={classes.profile__info__wrapper}>*/}
                {/*        <a className={classes.profile__info__link} href="#">*/}
                {/*            <img className={classes.profile__info__img} src={avatar} alt="avatar"/>*/}
                {/*        </a>*/}
                {/*        <div className={classes.profile__info__down}>*/}
                {/*            <h3 className={classes.profile__info__title}>Bruce Wayne</h3>*/}
                {/*            <span className={classes.profile__info__location}>Kyiv, Ukraine</span>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <ul className={classes.profile__header__list}>
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
            <MyPosts/>
        </div>
    )
}

export default Profile;