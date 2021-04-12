import React from "react";
import classes from "./ProfileContact.module.scss";


type ProfileContactType = {
    site: string | null
    link: string | null
}

export const ProfileContact:React.FC<ProfileContactType> = (props) => {
    return (
        // <li>{props.key}: {props.value}</li>
        <li className={classes.profileContact}>
            {props.site}: {props.link 
                ? <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.profileLink} 
                    href={props.link}>
                        {props.link}
                    </a> : <span className={classes.profileLink}>No link</span>}
        </li>
    )
}