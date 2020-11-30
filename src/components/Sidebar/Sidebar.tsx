import React from 'react';
import { SidebarType } from '../../redux/store';
import StoreContext from '../../StoreContext';
import classes from './Sidebar.module.scss';
import SidebarFriend from './SidebarFriend/SidebarFriend';

const Sidebar: React.FC = () => {
  return (
    <StoreContext.Consumer>
      {store => (
        <div className={classes.sidebar}>
          <ul className={classes.sidebar__friends}>
            {store.getState().sidebar.friends.map(friend => <SidebarFriend
              id={friend.id}
              key={friend.id}
              name={friend.name}
              avatar={friend.avatar}
              status={friend.status} />)}
          </ul>
        </div >
      )}
    </StoreContext.Consumer>
  )
}

export default Sidebar;