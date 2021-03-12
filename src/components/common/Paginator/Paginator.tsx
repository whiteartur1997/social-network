import React from "react";
import styles from "./Paginator.module.scss";


type PaginatorType = {
    totalUsersCount: number
    pageSize: number
    onCurrentPageChanged: (pageNumber: number) => void
    currentPage: number
}

export const Paginator = (props: PaginatorType) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={styles.pagination}>
            {pages.map((p, i) => <span
                key={i}
                onClick={(e) => props.onCurrentPageChanged(p)}
                className={props.currentPage === p ? styles.selectedPage : ""}>
                    {p}
                </span>
            )}
        </div>
    )
}
