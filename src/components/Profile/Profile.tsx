import React from 'react';
import {UserProfileType} from '../../redux/profileReducer';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import classes from './Profile.module.scss';
import ProfileInfo from './ProfileInfo/ProfileInfo';

export type ProfileType = {
    isOwner: boolean
    profile: UserProfileType | null
    status: string
    updateUserStatus: (status: string) => void
}

const Profile: React.FC<ProfileType> = (props) => {

    return (
        <div className={classes.profile}>
            <ProfileInfo
                isOwner={props.isOwner}
                updateUserStatus={props.updateUserStatus}
                profile={props.profile}
                status={props.status}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;