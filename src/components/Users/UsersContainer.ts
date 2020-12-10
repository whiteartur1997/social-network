import { followAC, unfollowAC, setUsersAC } from './../../redux/usersReducer';
import { Dispatch } from 'redux';
import Users from './Users';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { UserType } from '../../redux/usersReducer';

type MapStateToPropsType = {
  users: UserType[]
}

type MapDispatchToPropsType = {
  followUser: (userId: number) => void
  unfollowUser: (userId: number) => void
  setUsers: (users: UserType[]) => void
}


function mapStateToProps(state: AppStateType): MapStateToPropsType {
  return {
    users: state.usersPage.users
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
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;