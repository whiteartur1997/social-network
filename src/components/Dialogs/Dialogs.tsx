import React from 'react';
import { DialogsPageType } from '../../redux/store';
import DialogItem from './../Dialogs/DialogItem/DialogItem';
import classes from './Dialogs.module.scss';
import Messages from './Messages/Messages';

type DialogsPropsType = {
  dialogsPage: DialogsPageType
  updateNewMessageText: (newText: string) => void
  sendMessage: () => void
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {
  return (
    <div className={classes.dialogs}>
      <h4 className={classes.dialogs__header}>Chat / Messages</h4>
      <div>
        <ul className={classes.dialogs__contacts}>
          {props.dialogsPage.dialogs.map(dialog => {
            return (
              <DialogItem key={dialog.id} dialog={dialog} />
            )
          })}
        </ul>
        <Messages 
          messages={props.dialogsPage.messages} 
          newMessageText={props.dialogsPage.newMessageText} 
          updateNewMessageText={props.updateNewMessageText}
          sendMessage={props.sendMessage} />
      </div>
    </div>
  )
}

export default Dialogs;