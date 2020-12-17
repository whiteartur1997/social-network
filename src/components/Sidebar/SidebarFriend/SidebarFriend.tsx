import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './SidebarFriend.module.scss';
import {SidebarFriendType} from "../../../redux/sidebarReducer";

const SidebarFriend: React.FC<SidebarFriendType> = (props) => {
  let online = props.status === "online";
  return (
    <li className={`${classes.sidebar__friend} ${online ? classes.active : ""}`} id={String(props.id)}>
      <div className={classes.sidebar__friend__avatar_wrapper}>
        <span></span>
        <img
          className={classes.sidebar__friend__avatar}
          alt="ava"
          src={props.avatar} />
      </div>
      <div className={classes.sidebar__friend__descr}>
        <NavLink to="/#" className={classes.sidebar__friend__descr_title}>{props.name}</NavLink>
        <span className={classes.sidebar__friend__descr_status}>{props.status}</span>
      </div>
      <i className="fas fa-ellipsis-h"></i>
    </li>
  )
}

export default SidebarFriend;