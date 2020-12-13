import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppStateType } from '../../redux/redux-store';
import { UserType } from '../../redux/usersReducer';
import { followAC, setUsersAC, unfollowAC } from './../../redux/usersReducer';
import Users from './Users';

type MapStateToPropsType = {
  users: UserType[] | []
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