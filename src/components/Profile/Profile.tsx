import React from 'react';
import classes from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import HeaderList from './HeaderList/HeaderList';
import { PostType } from '../..';

export type PostsType = {
  posts: Array<PostType>
}

const Profile: React.FC<PostsType> = (props) => {
  return (
    <div className={classes.profile}>
      <div className={classes.profile__up}>
        <ProfileInfo />
        <HeaderList />
      </div>
      <MyPosts posts={props.posts} />
    </div>
  )
}

export default Profile;