import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppStateType } from '../../redux/redux-store';
import {setCurrentPageAC, setTotalUsersAC, UsersPageType, UserType} from '../../redux/usersReducer';
import { followAC, setUsersAC, unfollowAC } from './../../redux/usersReducer';
import Users from './Users';

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;