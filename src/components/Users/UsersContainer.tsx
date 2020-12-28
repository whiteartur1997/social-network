import React from "react";
import { connect } from 'react-redux';
import { getUsersAPI } from "../../API/API";
import { AppStateType } from '../../redux/redux-store';
import { UserType } from '../../redux/usersReducer';
import Preloader from "../common/Preloader";
import {
  followUser, setCurrentPage,
  setTotalUsersCount, setUsers,
  toggleFollowing, toggleIsFetching, unfollowUser
} from './../../redux/usersReducer';
import Users from "./Users";

export type UsersContainerType = MapStateToPropsType & MapDispatchToPropsType;

type MapStateToPropsType = {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: number[]
}

type MapDispatchToPropsType = {
  followUser: (userId: number) => void
  unfollowUser: (userId: number) => void
  setUsers: (users: UserType[]) => void
  setCurrentPage: (pageNumber: number) => void
  setTotalUsersCount: (totalUsers: number) => void
  toggleIsFetching: (isFetching: boolean) => void
  toggleFollowing: (isFollowing: boolean, userID: number) => void
}



class UsersContainer extends React.Component<UsersContainerType> {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    getUsersAPI(this.props.currentPage, this.props.pageSize)
      .then(data => {
        this.props.toggleIsFetching(false);
        this.props.setTotalUsersCount(data.totalCount);
        this.props.setUsers(data.items);
      }).catch(() => {
        this.props.setUsers([]);
      })
  }

  onCurrentPageChanged = (currentPage: number) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(currentPage);
    getUsersAPI(currentPage, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
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
            unfollowUser={this.props.unfollowUser}
            followingInProgress={this.props.followingInProgress}
            toggleFollowing={this.props.toggleFollowing} />
        }
      </div>
    )
  }
}

function mapStateToProps(state: AppStateType): MapStateToPropsType {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}

export default connect(mapStateToProps, {
  followUser, unfollowUser,
  setUsers, setCurrentPage,
  setTotalUsersCount, toggleIsFetching,
  toggleFollowing
})(UsersContainer)
