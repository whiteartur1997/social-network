import classes from "./ProfileInfo.module.scss";
import React from "react";

type ContactType = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}

type ProfileContactsType = {
    contacts: ContactType
}

export const ProfileContacts:React.FC<ProfileContactsType> = (props) => {
    console.log(props.contacts);
    return <div className={classes.profileContacts}>
        <ul>
            {
                Object.keys(props.contacts).map((contact, index) => (
                    <li key={index}>
                        <b>{contact}</b>
                        <a href={""}>{props.contacts[contact as keyof ContactType]}</a>
                        </li>
                ))
            }
            {/*<li>VK: <a href={`${props.contacts.vk}`}>VK</a></li>*/}
        </ul>
    </div>;
}