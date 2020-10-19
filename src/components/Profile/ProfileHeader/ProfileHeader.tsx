import React from "react";
import classes from "./ProfileHeader.module.scss";


const ProfileHeader = () => {
    return (
        <>
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
        </>
    )
}

export default ProfileHeader;