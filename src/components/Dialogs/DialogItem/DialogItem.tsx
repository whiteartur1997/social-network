import React from 'react'
import classes from './DialogItem.module.scss';
import avatar from './../../../img/profile/avatar.jpg';
import { NavLink } from 'react-router-dom';

export type DialogType = {
  name: string
  id: number
  preview: string
  time: string
}

const DialogItem = (props: DialogType) => {
  return (
    <NavLink to={`/dialogs/${props.id}`} activeClassName={classes.active}>
      <li className={`${classes.dialogs__contact} ${classes.active}`}>
        <img className={classes.dialogs__contact__avatar} src={avatar} />
        <div className={classes.dialogs__contact__info}>
          <h6 className={classes.dialogs__contact__title}>
            <NavLink to={"/dialogs/#"} className={classes.dialogs__contact__title}>{props.name}</NavLink>
          </h6>
          <span className={classes.dialogs__contact__preview}>
            {props.preview}
          </span>
          <span className={classes.dialogs__contact__time}>
            {props.time}
          </span>
        </div>
        <i className="far fa-envelope"></i>
      </li>
    </NavLink>
  )
}

export default DialogItem;