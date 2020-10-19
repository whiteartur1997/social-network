import React from 'react';
import classes from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import MessageField from './MessageField/MessageField';

const Dialogs = () => {

    const dialogsData = [
        { id: 1, name: "Tony Spark", preview: "Where is my iron suit?", time: "8:23 AM" },
        { id: 2, name: "Aquaman", preview: "Let's go for swimming...", time: "8:13 AM" },
        { id: 3, name: "Cat Woman", preview: "Kiss kiss", time: "10:23 AM" },
        { id: 4, name: "Joker", preview: "Why you so serious?", time: "10:54 AM" },
    ];

    return (
        <div className={classes.dialogs}>
            <h4 className={classes.dialogs__header}>Chat / Messages</h4>
            <div>
                <ul className={classes.dialogs__contacts}>
                    <DialogItem
                        name={dialogsData[0].name}
                        id={dialogsData[0].id}
                        preview={dialogsData[0].preview}
                        time={dialogsData[0].time}
                    />
                    <DialogItem
                        name={dialogsData[1].name}
                        id={dialogsData[1].id}
                        preview={dialogsData[1].preview}
                        time={dialogsData[1].time}
                    />
                    <DialogItem
                        name={dialogsData[2].name}
                        id={dialogsData[2].id}
                        preview={dialogsData[2].preview}
                        time={dialogsData[2].time}
                    />
                    <DialogItem
                        name={dialogsData[3].name}
                        id={dialogsData[3].id}
                        preview={dialogsData[3].preview}
                        time={dialogsData[3].time}
                    />

                </ul>
                <MessageField />
            </div>
        </div>
    )
}

export default Dialogs;