import React from 'react';
import { ActionsTypes, ProfilePageType } from '../../redux/store';
import HeaderList from './HeaderList/HeaderList';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.scss';
import ProfileInfo from './ProfileInfo/ProfileInfo';


export type ProfileDataType = {
  profileData: ProfilePageType
  dispatch: (action: ActionsTypes) => void
}

const Profile: React.FC<ProfileDataType> = (props) => {
  return (
    <div className={classes.profile}>
      <div className={classes.profile__up}>
        <ProfileInfo />
        <HeaderList />
      </div>
      <MyPosts
        profileData={props.profileData}
        dispatch={props.dispatch}
      />
    </div>
  )
}

export default Profile;