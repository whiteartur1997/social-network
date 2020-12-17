import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppStateType } from '../../redux/redux-store';
import {setCurrentPageAC, setTotalUsersAC, UsersPageType, UserType} from '../../redux/usersReducer';
import { followAC, setUsersAC, unfollowAC } from '../../redux/usersReducer';
import React from "react";
import axios from "axios";
import Users from "./Users";

export type UsersContainerType = {
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

type GetUsersResponseType = {
  items: UserType[]
  totalCount: number
  error: string
}

class UsersContainer extends React.Component<UsersContainerType> {
  componentDidMount() {
    console.log("Mounted")
    axios.get<GetUsersResponseType>(
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
    axios.get<GetUsersResponseType>(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`
    ).then(response => {
      this.props.setUsers(response.data.items);
    })
  }

  render() {
    return (
        <Users currentPage={this.props.currentPage}
               pageSize={this.props.pageSize}
               totalUsersCount={this.props.totalUsersCount}
               users={this.props.users}
               onCurrentPageChanged={this.onCurrentPageChanged}
               followUser={this.props.followUser}
               unfollowUser={this.props.unfollowUser}/>
    )
  }
}

type MapDispatchToPropsType = {
  followUser: (userId: number) => void
  unfollowUser: (userId: number) => void
  setUsers: (users: UserType[]) => void
  setCurrentPage: (pageNumber: number) => void
  setTotalUsersCount: (totalUsers: number) => void
}

function mapStateToProps(state: AppStateType): UsersPageType {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
}

function mapDispatchToProps(dispatch: Dispatch): MapDispatchToPropsType {
  return {
    followUser: (userId) => {
      dispatch(followAC(userId))
    },
    unfollowUser: (userId) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: (totalUsers) => {
      dispatch(setTotalUsersAC(totalUsers))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
