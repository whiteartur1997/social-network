import React from "react";
import { UserType } from "../../redux/usersReducer";
import UserCard from "./UserCard/UserCard";
import styles from "./Users.module.scss";
import s from "./UserCard/UserCard.module.scss";
import {Paginator} from "../common/Paginator/Paginator";


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

    return (
        <div className={styles.Users}>
            <Paginator
                pageCount={props.totalUsersCount / props.pageSize}
                totalItemsCount={props.totalUsersCount}
                pageSize={props.pageSize}
                onPageChange={props.onCurrentPageChanged}
                currentPage={props.currentPage} />
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