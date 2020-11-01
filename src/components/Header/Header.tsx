import React from 'react';
import logo from './../../img/logo.png';
import avatar from './../../img/batman.png';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink className={styles.header__link} to="/profile">
        <img className={styles.header__logo} src={logo} alt="logo" />
      </NavLink>
      <div className={styles.header__current}>
        ---Current Page---
      </div>
      <form className={styles.header__search}>
        <input
          className={styles.header__search__input}
          type="text"
          placeholder="Search for people and pages..."
        />
        <button type="submit" className={styles.header__search__submit}>
          <i className="fas fa-search fa-2x"></i>
        </button>
      </form>
      <div className={styles.header__account}>
        <img className={styles.header__account__img} src={avatar} alt={"avatar"} />
        <div className={styles.header__account__info}>
          <h5 className={styles.header__account__name}>Bruce Wayne</h5>
          <span className={styles.header__account__status}>Superhero</span>
        </div>
      </div>
    </header>
  )
}

export default Header;