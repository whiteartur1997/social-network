import React from 'react';
import { UserProfileType } from '../../redux/profileReducer';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import classes from './Profile.module.scss';
import ProfileInfo from './ProfileInfo/ProfileInfo';

export type ProfileType = {
  profile: UserProfileType | null
  status: string
}

const Profile: React.FC<ProfileType> = (props) => {
  return (
    <div className={classes.profile}>
      <ProfileInfo profile={props.profile} status={props.status} />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;