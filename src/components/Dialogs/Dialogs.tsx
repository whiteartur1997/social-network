import React from 'react';
import classes from './Dialogs.module.scss';
import avatar from './../../img/profile/avatar.jpg';

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <h4 className={classes.dialogs__header}>Chat / Messages</h4>
      <div>
        <ul className={classes.dialogs__contacts}>
          <li className={classes.dialogs__contact}>
            <img className={classes.dialogs__contact__avatar} src={avatar} />
            <div className={classes.dialogs__contact__info}>
              <h6 className={classes.dialogs__contact__title}>
                <a className={classes.dialogs__contact__title}>Tony Stark</a>
            </h6>
              <span className={classes.dialogs__contact__preview}>
                Lorem ipsum dolor sit amet.
            </span>
              <span className={classes.dialogs__contact__time}>
                4 hours ago
            </span>
            </div>
            <i className="far fa-envelope"></i>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Dialogs;