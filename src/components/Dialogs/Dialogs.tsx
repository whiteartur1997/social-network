import React from 'react';
import classes from './Dialogs.module.scss';
import DialogItem from './../Dialogs/DialogItem/DialogItem';
import Messages from './Messages/Messages';
import { DialogItemType, MessageItemType } from '../..';

type DialogsType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageItemType>
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
                <Messages messages={props.messages} />
            </div>
        </div>
    )
}

export default Dialogs;