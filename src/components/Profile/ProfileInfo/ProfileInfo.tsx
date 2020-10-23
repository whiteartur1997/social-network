import React from "react";
import classes from "./ProfileInfo.module.scss";
import coverImage from "../../../img/cover.jpg";
import avatar from "../../../img/batman.png";


const ProfileInfo = () => {
    return (
        <>
            <div className={classes.profile__cover}>
                <img className={classes.profile__cover__img} src={coverImage} alt="cover" />
            </div>
            <div className={classes.profile__header}>
                <div className={classes.profile__info__wrapper}>
                    <div className={classes.profile__info__link}>
                        <img className={classes.profile__info__img} src={avatar} alt="avatar" />
                    </div>
                    <div className={classes.profile__info__down}>
                        <h3 className={classes.profile__info__title}>Bruce Wayne</h3>
                        <span className={classes.profile__info__location}>Kyiv, Ukraine</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileInfo;