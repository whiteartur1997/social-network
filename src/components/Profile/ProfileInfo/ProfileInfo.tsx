import React from "react";
import avatar from "../../../assets/img/batman.png";
import coverImage from "../../../assets/img/cover.jpg";
import Preloader from "../../common/Preloader";
import { ProfileType } from "../Profile";
import classes from "./ProfileInfo.module.scss";


const ProfileInfo: React.FC<ProfileType> = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <>
            <div className={classes.profile__cover}>
                <img className={classes.profile__cover__img} src={props.profile?.photos.large || coverImage} alt="cover" />
            </div>
            <div className={classes.profile__header}>
                <div className={classes.profile__info__wrapper}>
                    <div className={classes.profile__info__link}>
                        <img className={classes.profile__info__img} src={props.profile?.photos.small || avatar} alt="avatar" />
                    </div>
                    <div className={classes.profile__info__down}>
                        <h3 className={classes.profile__info__title}>{props.profile?.fullName}</h3>
                        <span className={classes.profile__info__location}>{props.profile?.aboutMe}</span>
                        <span className={classes.profile__info__location}>
                            {props.profile?.lookingForAJob ? "Ищу работу" : "Не ищу работу"}
                        </span>
                        <span className={classes.profile__info__location}>{props.profile?.lookingForAJobDescription}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileInfo;