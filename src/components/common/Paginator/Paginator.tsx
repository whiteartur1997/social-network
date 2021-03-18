import React from 'react'
//@ts-ignore
import Paginate, { ReactPaginateProps } from 'react-paginate'
import styles from "./Paginator.module.scss";

export type OnPageChangeCallback = ReactPaginateProps['onPageChange']

interface Props {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    pageCount: number
    onPageChange?: (page: number) => void
}

export const Paginator = ({
                                    currentPage,
                                    pageCount,
                                    onPageChange
                                }: Props) => {

    const changePageHandler = (page: {selected: number}) => {
        onPageChange && onPageChange(page.selected + 1);
    }

    return (
        <div className={styles.pagination}>
            <Paginate
                forcePage={currentPage - 1}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={changePageHandler}
                nextLabel="&rarr;"
                previousLabel="&larr;"
            />
        </div>
    )
}
