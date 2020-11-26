import React from 'react';
import { ActionsTypes, DialogsPageType } from '../../redux/store';
import DialogItem from './../Dialogs/DialogItem/DialogItem';
import classes from './Dialogs.module.scss';
import Messages from './Messages/Messages';

type DialogsType = {
    dialogsData: DialogsPageType
    dispatch: (action: ActionsTypes) => void
}

const Dialogs: React.FC<DialogsType> = (props) => {
    const { dialogs, messages, newMessageText } = props.dialogsData;
    return (
        <div className={classes.dialogs}>
            <h4 className={classes.dialogs__header}>Chat / Messages</h4>
            <div>
                <ul className={classes.dialogs__contacts}>
                    {dialogs.map(dialog => {
                        return (
                            <DialogItem key={dialog.id} dialog={dialog} />
                        )
                    })}
                </ul>
                <Messages
                    messages={messages}
                    newMessageText={newMessageText}
                    dispatch={props.dispatch} />
            </div>
        </div>
    )
}

export default Dialogs;