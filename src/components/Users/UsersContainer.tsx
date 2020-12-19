import axios from "axios";
import React from "react";
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppStateType } from '../../redux/redux-store';
import { followAC, setCurrentPageAC, setTotalUsersAC, setUsersAC, toggleIsFetchingAC, unfollowAC, UsersPageType, UserType } from '../../redux/usersReducer';
import Preloader from "../common/Preloader";
import Users from "./Users";

export type UsersContainerType = {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followUser: (userId: number) => void
  unfollowUser: (userId: number) => void
  setUsers: (users: UserType[]) => void
  setCurrentPage: (pageNumber: number) => void
  setTotalUsersCount: (totalUsers: number) => void
  toggleIsFetching: (isFetching: boolean) => void
}

type GetUsersResponseType = {
  items: UserType[]
  totalCount: number
  error: string
}

class UsersContainer extends React.Component<UsersContainerType> {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get<GetUsersResponseType>(
      `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setTotalUsersCount(response.data.totalCount);
        this.props.setUsers(response.data.items);
      }).catch(() => {
        this.props.setUsers([]);
      })
  }

  onCurrentPageChanged = (currentPage: number) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(currentPage);
    axios.get<GetUsersResponseType>(
      `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`
    ).then(response => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(response.data.items);
    })
  }

  render() {
    return (
      <div>
        {this.props.isFetching
          ? <Preloader />
          : <Users currentPage={this.props.currentPage}
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            users={this.props.users}
            onCurrentPageChanged={this.onCurrentPageChanged}
            followUser={this.props.followUser}
            unfollowUser={this.props.unfollowUser} />
        }
      </div>
    )
  }
}

type MapDispatchToPropsType = {
  followUser: (userId: number) => void
  unfollowUser: (userId: number) => void
  setUsers: (users: UserType[]) => void
  setCurrentPage: (pageNumber: number) => void
  setTotalUsersCount: (totalUsers: number) => void
  toggleIsFetching: (isFetching: boolean) => void
}

function mapStateToProps(state: AppStateType): UsersPageType {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
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
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
