import React, { Component } from 'react';
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { compose } from 'redux';
import { AppStateType } from "../../redux/redux-store";
import { withAuthRedirect } from '../HOC/AuthRedirect';
import { setUserProfile, setUserStatus, updateUserStatus, UserProfileType } from "./../../redux/profileReducer";
import Profile from './Profile';

type PathParamsType = { userId: string };

type WithUrlProfileContainerType = RouteComponentProps<PathParamsType> & ProfileContainerType;

type MapStateToPropsType = {
  profile: UserProfileType | null
  status: string
  authorizedUserId: number | null
  isAuth: boolean
}

type MapDispatchToPropsType = {
  setUserProfile: (userId: number | null) => void
  setUserStatus: (userId: number | null) => void
  updateUserStatus: (status: string) => void
}

type ProfileContainerType = MapStateToPropsType & MapDispatchToPropsType;


// ProfileContainer делает грязную работу для Profile (запрос на сервер)
class ProfileContainer extends Component<WithUrlProfileContainerType> {
  componentDidMount() {
    const userId = +this.props.match.params.userId || this.props.authorizedUserId;
    this.props.setUserProfile(userId);
    this.props.setUserStatus(userId);
  }

  render() {
    return <Profile
      {...this.props}
      updateUserStatus={this.props.updateUserStatus}
      profile={this.props.profile} />
  }
}

function mapStateToProps(state: AppStateType): MapStateToPropsType {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
  }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, { setUserProfile, setUserStatus, updateUserStatus }),
  withRouter,
  withAuthRedirect)
  (ProfileContainer);