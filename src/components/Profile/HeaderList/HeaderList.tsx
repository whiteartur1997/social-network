import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './HeaderList.module.scss';

function HeaderList() {
  return (
    <ul className={classes.profile__header__list}>
      <li className={classes.profile__header__item}>
        <NavLink className={`${classes.profile__header__link} ${classes.active}`} to='/#'>Timeline</NavLink>
      </li>
      <li className={classes.profile__header__item}>
        <NavLink className={classes.profile__header__link} to='/#'>About</NavLink>
      </li>
      <li className={classes.profile__header__item}>
        <NavLink className={classes.profile__header__link} to='/#'>Friends</NavLink>
      </li>
      <li className={classes.profile__header__item}>
        <NavLink className={classes.profile__header__link} to='/#'>Photos</NavLink>
      </li>
      <li className={classes.profile__header__item}>
        <NavLink className={classes.profile__header__link} to='/#'>Videos</NavLink>
      </li>
      <li className={classes.profile__header__item}>
        <NavLink className={classes.profile__header__link} to='/#'>About</NavLink>
      </li>
    </ul>
  )
}

export default HeaderList;