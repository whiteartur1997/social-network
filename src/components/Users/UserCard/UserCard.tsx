import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserType } from '../../../redux/usersReducer';
import s from './UserCard.module.scss';

type UserPropsType = {
  user: UserType
  followUser: (userId: number) => void
  unfollowUser: (userId: number) => void
  setUsers:(users: UserType[]) => void
}

const User: React.FC<UserPropsType> = ({ user, followUser, unfollowUser, setUsers }) => {
  
  function followUserHandler() {
    followUser(user.id)
  }

  function unfollowUserHandler() {
    unfollowUser(user.id)
  }

  return (
    <div className={s.userCard}>
      <div className={s.userCardBgWrapper}>
        <img className={s.userCardBg} alt={"userBG"} src={user.backImage} />
      </div>
      <div className={s.userCardAvatarWrapper}>
        <img className={s.userCardAvatar} alt={"userAvatar"} src={user.avatar} />
      </div>
      <div className={s.userCardBottom}>
        <NavLink to={"#"}>
          <h5 className={s.userCardTitle}>{user.name} {user.surname}</h5>
        </NavLink>
        <span className={s.userCardLocation}>{user.location.city}, {user.location.country}</span>
        <div className={s.userCardFeatures}>
          <div className={s.userCardFriends}>
            <span>{user.friends}</span>
            <br/>
            <span>friends</span>
        </div>
          <div className={s.userCardPhotos}>
            <span>{user.photos}</span>
            <br/>
            <span>photos</span>
        </div>
        </div>
        <h6 className={s.userCardStatus}>{user.status}</h6>
        {user.isFollowed ?
          <button 
            onClick={unfollowUserHandler}
            style={{backgroundColor: "#d63434"}} 
            className={s.userCardBtn}>Unfollow</button>
          : <button 
            onClick={followUserHandler}
            style={{backgroundColor: "#38a9ff"}}  
            className={s.userCardBtn}>Follow</button>
        }
      </div>
    </div>
  )
}

export default User;