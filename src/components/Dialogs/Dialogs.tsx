import React from 'react';
import classes from './Dialogs.module.scss';
import DialogItem from './../Dialogs/DialogItem/DialogItem';
import Messages from './Messages/Messages';
import { DialogsPageType } from '../../redux/state';

type DialogsType = {
    dialogsData: DialogsPageType
}

const Dialogs: React.FC<DialogsType> = (props) => {
    const { dialogs, messages } = props.dialogsData;
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
                <Messages messages={messages} />
            </div>
        </div>
    )
}

export default Dialogs;