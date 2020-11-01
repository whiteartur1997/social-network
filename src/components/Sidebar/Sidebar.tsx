import React from 'react';
import { SidebarType } from '../../redux/state';
import classes from './Sidebar.module.scss';
import SidebarFriend from './SidebarFriend/SidebarFriend';

const Sidebar: React.FC<SidebarType> = (props) => {
  return (
    <div className={classes.sidebar}>
      <ul className={classes.sidebar__friends}>
        {props.friends.map(friend => <SidebarFriend
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