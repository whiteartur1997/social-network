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

const Users = (props: UsersPropsType) => {

  if(props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        name: "Lady",
        surname: "Gaga",
        location: {
          city: "New-York",
          country: "USA"
        },
        friends: 102,
        photos: 32,
        avatar: require('./../../img/gaga.png'),
        backImage: require('./../../img/userBG.jpg'),
        status: "Alejandro...",
        isFollowed: true
      },
      {
        id: 2,
        name: "Wilson",
        surname: "Deadpool",
        location: {
          city: "Brooklyn",
          country: "USA"
        },
        friends: 243,
        photos: 2,
        avatar: require('./../../img/gaga.png'),
        backImage: require('./../../img/userBG.jpg'),
        status: "Like read comics",
        isFollowed: false
      },
      {
        id: 3,
        name: "Tupac",
        surname: "Shakur",
        location: {
          city: "Los-Angeles",
          country: "USA"
        },
        friends: 44,
        photos: 5,
        avatar: require('./../../img/gaga.png'),
        backImage: require('./../../img/userBG.jpg'),
        status: "Thug life",
        isFollowed: false
      },
      {
        id: 4,
        name: "Vlad",
        surname: "Yama",
        location: {
          city: "Kyiv",
          country: "Ukraine"
        },
        friends: 891,
        photos: 77,
        avatar: require('./../../img/gaga.png'),
        backImage: require('./../../img/userBG.jpg'),
        status: "Cha cha cha",
        isFollowed: true
      },
    ])
  }
  
  return(
    <div className={s.usersCards}>
      { props.users.map(u => {
        return(
          <UserCard
            key={u.id} 
            user={u} 
            followUser={props.followUser}
            unfollowUser={props.unfollowUser}
            setUsers={props.setUsers}
          />
        )
      }) }
    </div>
  )
}

export default Users;