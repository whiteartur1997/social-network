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
        <div className={classes.profileInfo}>
            <div className={classes.profileCover}>
                <img className={classes.profileCoverImg} src={props.profile?.photos.large || coverImage} alt="cover" />
            </div>
            <div className={classes.profileBody}>
                <div className={classes.profileAvatar}>
                    <img src={props.profile?.photos.small || avatar} alt="avatar" />
                </div>
                <div className={classes.profileDescr}>
                    <h3 className={classes.profileDescrTitle}>{props.profile?.fullName}</h3>
                    <span className={classes.profileDescrAbout}>{props.profile?.aboutMe}</span>
                    <span className={classes.profileDescrJobSearch}>
                        {props.profile?.lookingForAJob ? "Ищу работу" : "Не ищу работу"}
                    </span>
                    <span className={classes.profileDescrJobDescr}>{props.profile?.lookingForAJobDescription}</span>
                </div>
                <div className={classes.profileContacts}>
                    <ul>
                        <li>Main: <a href={`${props.profile.contacts.mainLink}`}>Main</a></li>
                        <li>FB: <a href={`${props.profile.contacts.facebook}`}>FB</a></li>
                        <li>Insta: <a href={`${props.profile.contacts.instagram}`}>Insta</a></li>
                        <li>Github: <a href={`${props.profile.contacts.github}`}>Github</a></li>
                        <li>Twitter: <a href={`${props.profile.contacts.twitter}`}>Twitter</a></li>
                        <li>Youtube: <a href={`${props.profile.contacts.youtube}`}>Youtube</a></li>
                        <li>VK: <a href={`${props.profile.contacts.vk}`}>VK</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;