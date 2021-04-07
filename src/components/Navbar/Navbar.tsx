import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <nav className="nav">
        <ul className={classes.nav__list}>
          <li className={classes.nav__list__item}>
            <NavLink activeClassName={classes.active} className={classes.nav__list__link} to="/profile">
              <span>Profile</span>
              <i className="far fa-user"></i>
            </NavLink>
          </li>
          <li className={classes.nav__list__item}>
            <NavLink activeClassName={classes.active} className={classes.nav__list__link} to="/dialogs">
              <span>Messages</span>
              <i className="far fa-envelope"></i>
            </NavLink>
          </li>
          <li className={classes.nav__list__item}>
            <NavLink activeClassName={classes.active} className={classes.nav__list__link} to="/users">
              <span>Users</span>
              <i className="fas fa-user-friends"></i>
            </NavLink>
          </li>
          <li className={classes.nav__list__item}>
            <NavLink activeClassName={classes.active} className={classes.nav__list__link} to="/news">
              <span>News</span>
              <i className="far fa-newspaper"></i>
            </NavLink>
          </li>
          <li className={classes.nav__list__item}>
              <NavLink activeClassName={classes.active} className={classes.nav__list__link} to="/music">
              <span>Music</span>
              <i className="fas fa-headphones-alt"></i>
            </NavLink>
          </li>
          <li className={classes.nav__list__item}>
            <NavLink activeClassName={classes.active} className={classes.nav__list__link} to="/settings">
              <span>Settings</span>
              <i className="fas fa-cog"></i>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;