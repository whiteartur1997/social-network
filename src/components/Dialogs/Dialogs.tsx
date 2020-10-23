import React from 'react';
import classes from './Dialogs.module.scss';
import avatar from './../../img/profile/avatar.jpg';
import {NavLink} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';

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
                <div className={classes.message__field}>
                    <div className={classes.message__field__title}>
                        <h4 className={classes.message__title}>Joker</h4>
                        <a className={classes.message__settings}>
                            <i className="fas fa-ellipsis-h"></i>
                        </a>
                    </div>
                    <div className={classes.message__area}>
                       <MessageItem name={"Bruce Wayne"}
                                    description={"Yo bro. Let's rescue this world"}
                                    time={"13:33 PM"} />
                        <MessageItem name={"Yeah Man"}
                                     description={"Yo bro. Let's rescue this world"}
                                     time={"13:33 PM"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;