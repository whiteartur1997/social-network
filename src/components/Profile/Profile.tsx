import React from 'react';
import classes from './Profile.module.scss';
import coverImage from './../../img/profile/cover.jpg';
import avatar from './../../img/profile/avatar.jpg';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import HeaderList from './HeaderList/HeaderList';

const Profile = () => {
  return (
    <div className={classes.profile}>
      <div className={classes.profile__up}>
        <ProfileInfo />
        <HeaderList />
      </div>
      <MyPosts />
    </div>
  )
}

export default Profile;