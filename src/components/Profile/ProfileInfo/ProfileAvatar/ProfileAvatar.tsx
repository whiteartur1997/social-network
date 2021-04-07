import React from "react";
import classes from "./ProfileAvatar.module.scss";
import avatar from "../../../../assets/img/batman.png";
import {UserProfileType} from "../../../../redux/profileReducer";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";

type ProfileAvatarType = {
    profile: UserProfileType
    owner: boolean
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    status: string
    updateUserStatus: (status: string) => void
}

export const ProfileAvatar:React.FC<ProfileAvatarType> = (props) => {
    return <div className={classes.profileAvatar}>
        <div className={classes.profileAvatarWrapper}>
            <img src={props.profile?.photos.small || avatar} alt="avatar"/>
            {
                props.owner && <label className={classes.avatarInputLabel}>
                    Set new avatar
                    <input
                        className={classes.avatarInput}
                        type={"file"}
                        onChange={props.onChange}/>
                </label>
            }
        </div>
            <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus} />
    </div>;
}