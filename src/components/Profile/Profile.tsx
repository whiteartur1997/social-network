import React from 'react';
import classes from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import HeaderList from './HeaderList/HeaderList';
import { PostType } from '../../redux/state';


export type PostsType = {
  postsData: Array<PostType>
  addPost: (postMessage: string) => void
}

const Profile: React.FC<PostsType> = (props) => {
  return (
    <div className={classes.profile}>
      <div className={classes.profile__up}>
        <ProfileInfo />
        <HeaderList />
      </div>
      <MyPosts postsData={props.postsData} addPost={props.addPost} />
    </div>
  )
}

export default Profile;