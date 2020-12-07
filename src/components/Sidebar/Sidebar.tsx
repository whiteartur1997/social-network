import React from 'react';
import { SidebarFriendType } from '../../redux/store';
import classes from './Sidebar.module.scss';
import SidebarFriend from './SidebarFriend/SidebarFriend';


type SidebarPropsType = {
  sidebarFriends: SidebarFriendType[]
}

const Sidebar: React.FC<SidebarPropsType> = (props) => {
  return (
    <div className={classes.sidebar}>
      <ul className={classes.sidebar__friends}>
        {props.sidebarFriends.map(friend => <SidebarFriend
          id={friend.id}
          key={friend.id}
          name={friend.name}
          avatar={friend.avatar}
          status={friend.status} />)}
      </ul>
    </div >
  )
}

export default Sidebar;