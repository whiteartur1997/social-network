import classes from "./ProfileDescription.module.scss";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";
import React, {useState} from "react";
import {UserProfileType} from "../../../../redux/profileReducer";
import {EditProfileDescription} from "./EditProfileDescription/EditProfileDescription";

type ProfileDescriptionType = {
    profile: UserProfileType
}

export const ProfileDescription: React.FC<ProfileDescriptionType> = (props) => {

    const [editMode, setEditMode] = useState(false);

    return <div className={classes.profileDescr}>

        {
            editMode ? <EditProfileDescription/>
                : <>
                <div>
                    <h3 className={classes.profileDescrTitle}>{props.profile?.fullName}</h3>
                    <span style={{display: "block"}}>{props.profile.aboutMe}</span>
                    <span style={{display: "block"}}>
                        {props.profile?.lookingForAJob ? "Ищу работу" : "Не ищу работу"}
                    </span>
                    <span style={{display: "block"}}>
                        {props.profile?.lookingForAJobDescription}
                    </span>
                </div>
                <button
                    className={classes.editButton}
                    onClick={() => setEditMode(true)}>
                    Edit info
                </button>
                </>

        }
    </div>;
}