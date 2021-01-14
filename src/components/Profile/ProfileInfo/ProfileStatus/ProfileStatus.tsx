import React, { ChangeEvent } from "react";
import s from "./ProfileStatus.module.scss";

type ProfileStatusType = {
    isEdit: boolean
    status: string
}

type ProfileStatusPropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusPropsType, ProfileStatusType> {
    constructor(props: ProfileStatusPropsType) {
        super(props);
        this.state = {
            isEdit: false,
            status: this.props.status
        }
    }

    updateStatus = () => {
        this.props.updateUserStatus(this.state.status);
    }

    onChangehandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    activateEditMode = () => {
        this.setState({
            isEdit: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            isEdit: false
        })
    }



    render() {
        return this.state.isEdit
            ? <>
                <input
                    autoFocus
                    value={this.state.status}
                    onBlur={this.deactivateEditMode}
                    onChange={this.onChangehandler} />
                <button onClick={this.updateStatus}>Change status</button>
            </>
            : <span className={s.status} onDoubleClick={this.activateEditMode}>{this.props.status || "----"}</span>
    }
}


export default ProfileStatus;