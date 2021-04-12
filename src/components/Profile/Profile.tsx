import React from 'react';
import { UserProfileType } from '../../redux/profileReducer';
import Preloader from '../common/Preloader/Preloader';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import classes from './Profile.module.scss';
import { UserDescriptionFormDataType } from './ProfileInfo/ProfileDescription/ProfileDescription';
import ProfileInfo from './ProfileInfo/ProfileInfo';

export type ProfileType = {
    isOwner: boolean
    profile: UserProfileType | null
    status: string
    updateUserStatus: (status: string) => void
    updateUserPhoto: (photo: File) => Function
    updateUserProfile: (data: UserDescriptionFormDataType) =>  Promise<string>
}

const Profile: React.FC<ProfileType> = (props) => {

    return !props.profile ? <Preloader /> : <div className={classes.profile}>
        <ProfileInfo
            updateUserProfile={props.updateUserProfile}
            updateUserPhoto={props.updateUserPhoto}
            isOwner={props.isOwner}
            updateUserStatus={props.updateUserStatus}
            profile={props.profile}
            status={props.status} />
        <MyPostsContainer />
    </div>
}

export default Profile;