import React from "react";
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { getUsers, followUser, UserType, unfollowUser } from '../../redux/usersReducer';
import { getCurrentPage, getIsFetching, getIsFollowing, getPageSize, getTotalUsersCount, getUsersSelector } from "../../redux/usersSelectors";
import Preloader from "../common/Preloader";
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
  getUsers: (currentPage: number, pageSize: number) => void
  followUser: (userId: number) => void
  unfollowUser: (userId: number) => void
}



class UsersContainer extends React.Component<UsersContainerType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onCurrentPageChanged = (currentPage: number) => {
    this.props.getUsers(currentPage, this.props.pageSize);
  }

  render() {
    return (
      <>
        {this.props.isFetching
          ? <Preloader />
          : <Users currentPage={this.props.currentPage}
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            users={this.props.users}
            followingInProgress={this.props.followingInProgress}
            onCurrentPageChanged={this.onCurrentPageChanged}
            followUser={this.props.followUser}
            unfollowUser={this.props.unfollowUser} />
        }
      </>
    )
  }
}

// function mapStateToProps(state: AppStateType): MapStateToPropsType {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress
//   }
// }

function mapStateToProps(state: AppStateType): MapStateToPropsType {
    return {
      users: getUsersSelector(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingInProgress: getIsFollowing(state)
    }
  }

export default connect(mapStateToProps, {
  getUsers, followUser, unfollowUser
})(UsersContainer)
