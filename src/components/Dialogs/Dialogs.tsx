import React from 'react';
import { DialogItemType } from '../../redux/store';
import DialogItem from './../Dialogs/DialogItem/DialogItem';
import classes from './Dialogs.module.scss';
import MessagesContainer from './Messages/MessagesContainer';

type DialogsType = {
  dialogs: DialogItemType[]
}

const Dialogs: React.FC<DialogsType> = (props) => {
  return (
    <div className={classes.dialogs}>
      <h4 className={classes.dialogs__header}>Chat / Messages</h4>
      <div>
        <ul className={classes.dialogs__contacts}>
          {props.dialogs.map(dialog => {
            return (
              <DialogItem key={dialog.id} dialog={dialog} />
            )
          })}
        </ul>
        <MessagesContainer />
      </div>
    </div>
  )
}

export default Dialogs;