import axios from 'axios';
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

class Users extends React.Component<UsersPropsType> {
  // можно не писать это делегирование, 
  // так как полностью строимся от родитея React.Component
  constructor(props: UsersPropsType) {
    alert("New")
    super(props);
    axios.get<GetUsersRepsonseType>("https://social-network.samuraijs.com/api/1.0/users").then(response => {
      this.props.setUsers(response.data.items);
    }).catch(() => {
      this.props.setUsers([]);
    })
  }

  render() {
    return (
      <div className={s.usersCards}>
        { this.props.users.map(u => {
          return (
            <UserCard
              key={u.id}
              user={u}
              followUser={this.props.followUser}
              unfollowUser={this.props.unfollowUser}
            />
          )
        })}
      </div>
    )
  }
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