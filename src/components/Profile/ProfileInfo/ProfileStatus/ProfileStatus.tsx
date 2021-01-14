import React, { ChangeEvent } from "react";
import s from "./ProfileStatus.module.scss";

type ProfileStatusType = {
    isEdit: boolean
    status: string
}

type ProfileStatusPropsType = {
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusPropsType, ProfileStatusType> {
    constructor(props: ProfileStatusPropsType) {
        super(props);
        this.state = {
            isEdit: false,
            status: this.props.status
        }
    }


    onChangehandler = (e: ChangeEvent<HTMLInputElement>) => {
        debugger

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
        console.log("Status");
        console.log(this.props.status);
        return this.state.isEdit
            ? <input autoFocus value={this.state.status} onBlur={this.deactivateEditMode} onChange={this.onChangehandler} />
            : <span className={s.status} onDoubleClick={this.activateEditMode}>{this.props.status}</span>
    }
}


export default ProfileStatus;