import axios from 'axios';
import React from 'react';
import {UserType} from '../../redux/usersReducer';
import UserCard from './UserCard/UserCard';
import s from './UserCard/UserCard.module.scss';


type UsersPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalUsers: number) => void
}

type GetUsersRepsonseType = {
    items: UserType[]
    totalCount: number
    error: string
}

class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        console.log("Mounted")
        axios.get<GetUsersRepsonseType>(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
            this.props.setTotalUsersCount(response.data.totalCount);
            this.props.setUsers(response.data.items);
        }).catch(() => {
            this.props.setUsers([]);
        })
    }

    onCurrentPageChanged = (currentPage: number) => {
        // currentPage тут поменяется, но в axios, все равно еще візовется со старого this.props.currentPage
        // а только потом придут новые пропсы
        // поэтому надо currentPage брать
        this.props.setCurrentPage(currentPage);
        axios.get<GetUsersRepsonseType>(
            `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`
        ).then(response => {
            this.props.setUsers(response.data.items);
        })
    }

    render() {

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        const pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
              <div className={s.pagination}>
                {pages.map((p, i) => <span
                    key={i}
                    onClick={(e) => this.onCurrentPageChanged(p)}
                    className={this.props.currentPage === p ? s.selectedPage : ""}>
                          {p}
                    </span>
                )}
              </div>
              <div className={s.usersCards}>
                {this.props.users.map(u => {
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