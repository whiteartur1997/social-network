import axios from 'axios'; // уже написана на typescript
import React from 'react';
import { UserType } from '../../redux/usersReducer';
import UserCard from './UserCard/UserCard';
import s from './UserCard/UserCard.module.scss';


type UsersPropsType = {
  users: UserType[]
  followUser: (userId: number) => void
  unfollowUser: (userId: number) => void
  setUsers: (users: UserType[]) => void
}

type GetUsersRepsonseType = {
  items: UserType[]
  totalCount: number
  error: string
}

const Users = (props: UsersPropsType) => {
  let getUser = () => {
    if (props.users.length === 0) {
      axios.get<GetUsersRepsonseType>("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        props.setUsers(response.data.items);
      }).catch(() => {
        props.setUsers([]);
      })
    }
  }

  return (
    <div className={s.usersCards}>
      <button onClick={getUser}>Get Users</button>
      { props.users.map(u => {
        return (
          <UserCard
            key={u.id}
            user={u}
            followUser={props.followUser}
            unfollowUser={props.unfollowUser}
          />
        )
      })}
    </div>
  )
}

export default Users;


// {
  //   id: 1,
  //   name: "Lady",
  //   surname: "Gaga",
  //   location: {
  //     city: "New-York",
  //     country: "USA"
  //   },
  //   friends: 102,
  //   photos: 32,
  //   avatar: require('./../../img/gaga.png'),
  //   backImage: require('./../../img/userBG.jpg'),
  //   status: "Alejandro...",
  //   isFollowed: true
  // },