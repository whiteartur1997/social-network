import React, { ChangeEvent, useEffect, useState } from "react";
import s from "./ProfileStatus.module.scss";

type ProfileStatusPropsType = {
  status: string
  updateUserStatus: (status: string) => void
}

const ProfileStatusWithHooks: React.FC<ProfileStatusPropsType> = (props) => {

  const [editMode, setEditMode] = useState<boolean>(false);
  const [status, setStatus] = useState<string>(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateUserStatus(status);
  }

  const onStatusChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value);
  }

  return (editMode
    ? <>
      <input
        value={status}
        onChange={onStatusChanged}
        onBlur={deactivateEditMode}
        autoFocus />
    </>
    : <span
      onDoubleClick={activateEditMode}
      className={s.status}>
            <i className="fas fa-edit"></i> {props.status || "No status"}
  </span>
  )
}


export default ProfileStatusWithHooks;