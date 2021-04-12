import React, { ChangeEvent } from "react";
import coverImage from "../../../assets/img/cover.jpg";
import { ProfileType } from "../Profile";
import { ProfileAvatar } from "./ProfileAvatar/ProfileAvatar";
import { ProfileDescription } from "./ProfileDescription/ProfileDescription";
import classes from "./ProfileInfo.module.scss";

const ProfileInfo: React.FC<ProfileType> = (props) => {
    const onSelectedAvatarHandler = (event: ChangeEvent<HTMLInputElement>) => {
        if(event.target.files && event.target.files.length > 0) {
            props.updateUserPhoto(event.target.files[0]);
        }
    }

    if(!props.profile) {
        return null
    }

    return (
        <div className={classes.profileInfo}>
            <div className={classes.profileCover}>
                <img
                    className={classes.profileCoverImg}
                    src={props.profile?.photos.large || coverImage}
                    alt="cover"/>
            </div>
            <div className={classes.profileBody}>
                <ProfileAvatar
                    profile={props.profile}
                    owner={props.isOwner}
                    onChange={onSelectedAvatarHandler}
                    status={props.status}
                    updateUserStatus={props.updateUserStatus} />
                <ProfileDescription 
                    updateUserProfile={props.updateUserProfile}
                    owner={props.isOwner} 
                    profile={props.profile} />
            </div>
        </div>
    )
}

export default ProfileInfo;