import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/authReducer';
import { AppStateType } from '../../redux/redux-store';
import Header from './Header';

type MapStateToPropsType = {
  login: string | null
  isAuth: boolean
}

type MapDispatchToPropsType = {
  logoutUser: () => void
}

type HeaderContainerType = MapStateToPropsType & MapDispatchToPropsType;


class HeaderContainer extends React.Component<HeaderContainerType> {
  render() {
    return <Header {...this.props} />
  }
}

function mapStateToProps(state: AppStateType): MapStateToPropsType {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, { logoutUser })(HeaderContainer);