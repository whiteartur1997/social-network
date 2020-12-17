import s from "./UserCard/UserCard.module.scss";
import UserCard from "./UserCard/UserCard";
import React from "react";
import {UserType} from "../../redux/usersReducer";

type UsersType = {
    currentPage: number
    pageSize: number
    totalUsersCount: number
    users: UserType[]
    onCurrentPageChanged: (currentPage: number) => void
    followUser: (userId: number) => void
    unfollowUser:  (userId: number) => void
}


const Users = (props: UsersType) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return(
        <div>
            <div className={s.pagination}>
                {pages.map((p, i) => <span
                    key={i}
                    onClick={(e) => props.onCurrentPageChanged(p)}
                    className={props.currentPage === p ? s.selectedPage : ""}>
                          {p}
                    </span>
                )}
            </div>
            <div className={s.usersCards}>
                {props.users.map(u => {
                    return (
                        <UserCard
                            key={u.id}
                            user={u}
                            followUser={props.followUser}
                            unfollowUser={props.unfollowUser}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Users;