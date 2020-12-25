import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../../assets/img/logo.png';
import styles from './Header.module.scss';

type HeaderPropsType = {
  isAuth: boolean
  login: string | null
}

const Header: React.FC<HeaderPropsType> = (props) => {
  return (
    <header className={styles.header}>
      <NavLink className={styles.header__link} to="/profile">
        <img className={styles.header__logo} src={logo} alt="logo" />
      </NavLink>
      <div className={styles.header__current}>
        ---Current Page---
      </div>
      {props.isAuth
        ? <div className={styles.headerLogin}>
          {props.login}
        </div>
        : <div className={styles.headerLogin}>
          <NavLink to='/login'>Login</NavLink>
        </div>
      }
    </header>
  )
}

export default Header;