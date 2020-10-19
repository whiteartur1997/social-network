import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <nav className="nav">
        <ul className="nav__list">
          <li className={classes.nav__list__item}>
            <NavLink activeClassName={classes.active} className={classes.nav__list__link} to="/profile">
              <i className="far fa-user"></i>
              Profile
            </NavLink>
          </li>
          <li className={classes.nav__list__item}>
            <NavLink activeClassName={classes.active} className={classes.nav__list__link} to="/dialogs">
              <i className="far fa-envelope"></i>
              Messages
            </NavLink>
          </li>
          <li className={classes.nav__list__item}>
            <NavLink activeClassName={classes.active} className={classes.nav__list__link} to="/news">
              <i className="far fa-newspaper"></i>
              News
            </NavLink>
          </li>
          <li className={classes.nav__list__item}>
              <NavLink activeClassName={classes.active} className={classes.nav__list__link} to="/music">
              <i className="fas fa-headphones-alt"></i>
              Music
            </NavLink>
          </li>
          <li className={classes.nav__list__item}>
            <NavLink activeClassName={classes.active} className={classes.nav__list__link} to="/settings">
              <i className="fas fa-cog"></i>
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;