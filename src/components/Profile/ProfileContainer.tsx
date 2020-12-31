import React, { Component } from 'react';
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { AppStateType } from "../../redux/redux-store";
import { setUserProfile, UserProfileType } from "./../../redux/profileReducer";
import Profile from './Profile';

type PathParamsType = {
  userId: string
}

type WithUrlProfileContainerType = RouteComponentProps<PathParamsType> &
  ProfileContainerType;

type MapStateToPropsType = {
  profile: UserProfileType | null
}

type MapDispatchToPropsType = {
  setUserProfile: (userId: string) => void
}

type ProfileContainerType = MapStateToPropsType & MapDispatchToPropsType;

// ProfileContainer делает грязную работу для Profile (запрос на сервер)
class ProfileContainer extends Component<WithUrlProfileContainerType> {
  componentDidMount() {
    this.props.setUserProfile(this.props.match.params.userId)
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />
  }
}

function mapStateToProps(state: AppStateType): MapStateToPropsType {
  return {
    profile: state.profilePage.profile
  }
}

const WithURLDataProfileContainer = withRouter(ProfileContainer);
console.log(WithURLDataProfileContainer);

// эта контейнерная компонента достает state и методы для ProfileContainer
export default connect(mapStateToProps, { setUserProfile })(WithURLDataProfileContainer);