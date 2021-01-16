import React from "react";
import { UserType } from "../../redux/usersReducer";
import UserCard from "./UserCard/UserCard";
import styles from "./Users.module.scss";
import s from "./UserCard/UserCard.module.scss";

type UsersType = {
    currentPage: number
    pageSize: number
    totalUsersCount: number
    users: UserType[]
    followingInProgress: number[]
    onCurrentPageChanged: (currentPage: number) => void
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
}


const Users = (props: UsersType) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={styles.users}>
            <div className={styles.pagination}>
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
                            followingInProgress={props.followingInProgress}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Users;