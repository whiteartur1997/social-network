import React from 'react';
import { StoreType } from '../../redux/store';
import HeaderList from './HeaderList/HeaderList';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import classes from './Profile.module.scss';
import ProfileInfo from './ProfileInfo/ProfileInfo';


export type ProfileDataType = {
  store?: StoreType
}

const Profile: React.FC<ProfileDataType> = (props) => {
  return (
    <div className={classes.profile}>
      <div className={classes.profile__up}>
        <ProfileInfo />
        <HeaderList />
      </div>
      <MyPostsContainer />
    </div>
  )
}

export default Profile;