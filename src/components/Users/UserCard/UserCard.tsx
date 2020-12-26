import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserType } from '../../../redux/usersReducer';
import userBG from './../../../assets/img/userBG.jpg';
import s from './UserCard.module.scss';

type FollowUnfollowUserType = {
  resultCode: number
  messages: string[]
}

type UserPropsType = {
  user: UserType
  followUser: (userId: number) => void
  unfollowUser: (userId: number) => void
}

const User: React.FC<UserPropsType> = ({ user, followUser, unfollowUser }) => {

  function followUserHandler() {
    axios.post<FollowUnfollowUserType>(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
      withCredentials: true,
      headers: {
        "API-KEY": "12593e8b-a230-49da-8bc0-827e793858c7"
      }
    }).then(response => {
      if (response.data.resultCode === 0) {
        followUser(user.id)
      }
    })
  }

  function unfollowUserHandler() {
    axios.delete<FollowUnfollowUserType>(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
      withCredentials: true,
      headers: {
        "API-KEY": "12593e8b-a230-49da-8bc0-827e793858c7"
      }
    }).then(response => {
      if (response.data.resultCode === 0) {
        unfollowUser(user.id)
      }
    })
  }

  return (
    <div className={s.userCard}>
      <div className={s.userCardBgWrapper}>
        <img className={s.userCardBg} alt={"userBG"} src={userBG} />
      </div>
      <NavLink to={"/profile/" + user.id}>
        <div className={s.userCardAvatarWrapper}>
          <img className={s.userCardAvatar} alt={"userAvatar"} src={user.photos.small || "https://www.shareicon.net/data/512x512/2017/01/06/868320_people_512x512.png"} />
        </div>
      </NavLink>
      <div className={s.userCardBottom}>
        <NavLink to={"#"}>
          <h5 className={s.userCardTitle}>{user.name}</h5>
        </NavLink>
        <span className={s.userCardLocation}>{"user.location.city"}, {"user.location.country"}</span>
        <div className={s.userCardFeatures}>
          <div className={s.userCardFriends}>
            <span>{100}</span>
            <br />
            <span>friends</span>
          </div>
          <div className={s.userCardPhotos}>
            <span>{100}</span>
            <br />
            <span>photos</span>
          </div>
        </div>
        <h6 className={s.userCardStatus}>{user.status || "status"}</h6>
        {user.followed ?
          <button
            onClick={unfollowUserHandler}
            style={{ backgroundColor: "#d63434" }}
            className={s.userCardBtn}>Unfollow</button>
          : <button
            onClick={followUserHandler}
            style={{ backgroundColor: "#38a9ff" }}
            className={s.userCardBtn}>Follow</button>
        }
      </div>
    </div>
  )
}

export default User;