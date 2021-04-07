import classes from "./ProfileContacts.module.scss";
import React from "react";
import { ProfileContact } from "./ProfileContact/ProfileContact";

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

    console.log(props);

    return <div className={classes.profileContacts}>
        <ul>
            {
                Object.entries(props.contacts).map((contact) => (
                   <ProfileContact site={contact[0]} link={contact[1]} />
                ))
            }
            {/*<li>VK: <a href={`${props.contacts.vk}`}>VK</a></li>*/}
        </ul>
    </div>;
}