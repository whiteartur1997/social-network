import React from "react";

type ProfileContactType = {
    site: string | null
    link: string | null
}

export const ProfileContact:React.FC<ProfileContactType> = (props) => {
    return (
        // <li>{props.key}: {props.value}</li>
        <li>
            {props.site}: {props.link ? <a>{props.link}</a> : "No link"}
        </li>
    )
}