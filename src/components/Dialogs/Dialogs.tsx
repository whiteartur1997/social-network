import React from 'react';
import { StoreType } from '../../redux/store';
import DialogItem from './../Dialogs/DialogItem/DialogItem';
import classes from './Dialogs.module.scss';
import MessagesContainer from './Messages/MessagesContainer';

type DialogsType = {
   store: StoreType
}

const Dialogs: React.FC<DialogsType> = (props) => {
    return (
        <div className={classes.dialogs}>
            <h4 className={classes.dialogs__header}>Chat / Messages</h4>
            <div>
                <ul className={classes.dialogs__contacts}>
                    {props.store.getState().dialogsPage.dialogs.map(dialog => {
                        return (
                            <DialogItem key={dialog.id} dialog={dialog} />
                        )
                    })}
                </ul>
                <MessagesContainer store={props.store} />
            </div>
        </div>
    )
}

export default Dialogs;