import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../../assets/img/logo.png';
import styles from './Header.module.scss';

type HeaderPropsType = {
  isAuth: boolean
  login: string | null
  logoutUser: () => void
}

const Header: React.FC<HeaderPropsType> = (props) => {
  return (
    <header className={styles.header}>
      <NavLink className={styles.header__link} to="/profile">
        <img className={styles.header__logo} src={logo} alt="logo" />
      </NavLink>
      {props.isAuth
        ? <div className={styles.headerLogin}>
          <NavLink to="/profile">{props.login}</NavLink>
          <button onClick={props.logoutUser}>Log out</button>
        </div>
        : <div className={styles.headerLogin}>
          <NavLink to='/login'>Login</NavLink>
        </div>
      }
    </header>
  )
}

export default Header;