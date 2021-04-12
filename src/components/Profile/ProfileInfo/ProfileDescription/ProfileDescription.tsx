import React, { useState } from "react";
import { UserProfileType } from "../../../../redux/profileReducer";
import { ProfileContacts } from "../ProfileContacts/ProfileContacts";
import { EditProfileDescriptionReduxForm } from "./EditProfileDescription/EditProfileDescriptionAndContact";
import classes from "./ProfileDescription.module.scss";

type ProfileDescriptionType = {
    profile: UserProfileType
    owner: boolean
    updateUserProfile: (data: UserDescriptionFormDataType) => Promise<string>
}

export type UserDescriptionFormDataType = {
    fullname: string
    aboutMe: string
    lookingForaJob: boolean
    mySkills: string
}

export const ProfileDescription: React.FC<ProfileDescriptionType> = (props) => {

    const [editMode, setEditMode] = useState(false);

    const onSubmitHandler = (formData: UserDescriptionFormDataType) => {
        props.updateUserProfile(formData).then(() => {
            setEditMode(false)
        })
    }


    return <div className={classes.profileDescr}>

        {
            editMode ? <EditProfileDescriptionReduxForm
                //@ts-ignore
                onSubmit={onSubmitHandler}
                initialValues={props.profile} />
                : <>
                    <div className={classes.profileDescription}>
                        <h3 className={classes.profileDescrTitle}>
                            <b style={{ color: "black" }}>{props.profile?.fullName}</b>
                            {
                                props.owner && <button
                                    className={classes.editButton}
                                    onClick={() => setEditMode(true)}>
                                    Edit info
                                    </button>
                            }
                        </h3>
                        <span style={{ display: "block" }}>
                            <b style={{ color: "black" }}>About me: </b>
                            {
                                props.profile.aboutMe ||
                                "--About me info should be here, if filled in--"
                            }
                        </span>
                        <span style={{ display: "block" }}>
                            <b style={{ color: "black" }}>Status: </b>
                            {props.profile?.lookingForAJob ? "Looking for a job" : "I don't need job now"}
                        </span>
                        <span style={{ display: "block" }}>
                            <b style={{ color: "black" }}>My skills: </b>
                            {
                                props.profile?.lookingForAJobDescription ||
                                "--Looking for a job description should be here, if filled in--"
                            }
                        </span>
                    </div>
                    <ProfileContacts contacts={props.profile.contacts} />
                </>
        }
    </div>;
}