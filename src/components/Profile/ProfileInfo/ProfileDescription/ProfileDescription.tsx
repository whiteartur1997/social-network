import React, { useState } from "react";
import { UserProfileType } from "../../../../redux/profileReducer";
import { EditProfileDescription } from "./EditProfileDescription/EditProfileDescription";
import classes from "./ProfileDescription.module.scss";

type ProfileDescriptionType = {
    profile: UserProfileType
}

export const ProfileDescription: React.FC<ProfileDescriptionType> = (props) => {


    console.log(props);

    const [editMode, setEditMode] = useState(false);

    return <div className={classes.profileDescr}>

        {
            editMode ? <EditProfileDescription/>
                : <>
                <div className={classes.regularMode}>
                    <h3 className={classes.profileDescrTitle}>{props.profile?.fullName}</h3>
                    <span style={{display: "block"}}>
                        <b style={{color: "black"}}>About me: </b>
                        {
                        props.profile.aboutMe ||
                        "--About me info should be here, if filled in--"
                        }
                    </span>
                    <span style={{display: "block"}}>
                        <b style={{color: "black"}}>Status: </b>
                        {props.profile?.lookingForAJob ? "Looking for a job" : "I don't need job now"}
                    </span>
                    <span style={{display: "block"}}>
                        <b style={{color: "black"}}>My skills: </b>
                        {
                        props.profile?.lookingForAJobDescription || 
                        "--Looking for a job description should be here, if filled in--"
                        }
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