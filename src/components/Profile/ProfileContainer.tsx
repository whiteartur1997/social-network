import axios from "axios";
import React, { Component } from 'react';
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { setUserProfile, UserProfileType } from "./../../redux/profileReducer";
import Profile from './Profile';

type ProfileContainerType = {
  profile: UserProfileType | null
  setUserProfile: (userId: UserProfileType) => void
}

class ProfileContainer extends Component<ProfileContainerType> {

  componentDidMount() {
    axios.get<UserProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />
  }
}

function mapStateToProps(state: AppStateType) {
  return {
    profile: state.profilePage.profile
  }
}

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);