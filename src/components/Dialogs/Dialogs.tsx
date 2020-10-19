import React from 'react';
import classes from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import MessageField from './MessageField/MessageField';

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <h4 className={classes.dialogs__header}>Chat / Messages</h4>
            <div>
                <ul className={classes.dialogs__contacts}>
                    <DialogItem
                        name={"Tony Stark"}
                        id={"1"}
                        preview={"Where is my iron suit?"}
                        time={"8:23 AM"}
                    />
                    <DialogItem
                        name={"Aquaman"}
                        id={"2"}
                        preview={"Let's go for swimming..."}
                        time={"8:13 AM"}
                    />
                    <DialogItem
                        name={"Cat Woman"}
                        id={"3"}
                        preview={"Kiss kiss"}
                        time={"10:23 AM"}
                    />
                    <DialogItem
                        name={"Joker"}
                        id={"4"}
                        preview={"Why you so serious?"}
                        time={"10:54 AM"}
                    />

                </ul>
                <MessageField />
            </div>
        </div>
    )
}

export default Dialogs;