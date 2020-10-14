import React from 'react';
import classes from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <nav className="nav">
        <ul className="nav__list">
          <li className={classes.nav__list__item}>
            <a className={classes.nav__list__link} href="#">
              <i className="far fa-user"></i>
              Profile
            </a>
          </li>
          <li className={classes.nav__list__item}>
            <a className={classes.nav__list__link} href="#">
              <i className="far fa-envelope"></i>
              Messages
            </a>
          </li>
          <li className={classes.nav__list__item}>
            <a className={classes.nav__list__link} href="#">
              <i className="far fa-newspaper"></i>
              News
            </a>
          </li>
          <li className={classes.nav__list__item}>
            <a className={classes.nav__list__link} href="#">
              <i className="fas fa-headphones-alt"></i>
              Music
            </a>
          </li>
          <li className={classes.nav__list__item}>
            <a className={classes.nav__list__link} href="#">
              <i className="fas fa-cog"></i>
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;