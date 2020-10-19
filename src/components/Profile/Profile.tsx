import React from 'react';
import classes from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileHeader from './ProfileHeader/ProfileHeader';

const Profile = () => {
    return (
        <div className={classes.profile}>
            <div className={classes.profile__up}>
                <ProfileInfo />
                <ProfileHeader />
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;