import React from 'react';
import { NavLink } from 'react-router-dom';
import { DialogItemType } from "../../../redux/dialogsReducer";
import classes from './DialogItem.module.scss';


type DialogItemObj = {
    dialog: DialogItemType
}


const DialogItemMemo: React.FC<DialogItemObj> = (props) => {
    return (
        <NavLink to={`/dialogs/${props.dialog.id}`} activeClassName={classes.active}>
            <li className={`${classes.dialogs__contact} ${classes.active}`}>
                <img className={classes.dialogs__contact__avatar} src={props.dialog.avatar} alt={props.dialog.name} />
                <div className={classes.dialogs__contact__info}>
                    <h6 className={classes.dialogs__contact__title}>
                        {props.dialog.name}
                    </h6>
                    <span className={classes.dialogs__contact__preview}>
                        {props.dialog.preview}
                    </span>
                    <span className={classes.dialogs__contact__time}>
                        {props.dialog.time}
                    </span>
                </div>
                <i className="far fa-envelope"></i>
            </li>
        </NavLink>
    )
}

export default React.memo(DialogItemMemo);