import React, {Component} from 'react';
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from 'redux';
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from '../HOC/AuthRedirect';
import {
    setUserProfile,
    setUserStatus,
    updateUserPhoto,
    updateUserStatus,
    UserProfileType,
    updateUserProfile
} from "../../redux/profileReducer";
import Profile from './Profile';
import { UserDescriptionFormDataType } from './ProfileInfo/ProfileDescription/ProfileDescription';

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
    updateUserPhoto: (photo: File) => Function
    updateUserProfile: (data: UserDescriptionFormDataType) => Promise<string>
}

type ProfileContainerType = MapStateToPropsType & MapDispatchToPropsType;

class ProfileContainer extends Component<WithUrlProfileContainerType> {
    componentDidMount() {
        const userId = +this.props.match.params.userId || this.props.authorizedUserId;
        this.props.setUserProfile(userId);
        this.props.setUserStatus(userId);
    }

    componentDidUpdate(prevProps: WithUrlProfileContainerType) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            const userId = +this.props.match.params.userId || this.props.authorizedUserId;
            this.props.setUserProfile(userId);
            this.props.setUserStatus(userId);
        }
    }

    render() {
        return <Profile
            {...this.props}
            updateUserPhoto={this.props.updateUserPhoto}
            isOwner={!this.props.match.params.userId}
            updateUserStatus={this.props.updateUserStatus}
            profile={this.props.profile} />
    }
}

function mapStateToProps(state: AppStateType): MapStateToPropsType {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {setUserProfile, setUserStatus, updateUserStatus, updateUserPhoto, updateUserProfile}),
    withRouter,
    withAuthRedirect)
(ProfileContainer);