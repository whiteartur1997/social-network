import React, {useState} from 'react';
import classes from "./Paginator.module.scss";


type PaginatorType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (currentPage: number) => void
    portionSize?: number
}

export const Paginator: React.FC<PaginatorType> = ({pageSize, currentPage, portionSize = 10, totalItemsCount, onPageChanged}) => {

    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    const pages = [];
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionAmount = Math.ceil(pagesCount / portionSize);
    const [currentPortion, setCurrentPortion] = useState(1);
    const leftPortionPageNumber = (currentPortion - 1) * portionSize + 1;
    const rightPortionPageNumber = currentPortion * portionSize;

    const onPrevBtnClick = () => {
        setCurrentPortion(currentPortion - 1);
    }

    const onNextBtnClick = () => {
        setCurrentPortion(currentPortion + 1);
    }

    const onItemClick = (page: number) => {
        onPageChanged(page);
    }

    return(
        <ul className={classes.Paginator}>
            {currentPortion > 1 && <li className={classes.page} onClick={onPrevBtnClick}>Previous</li>}
            {
                pages
                    .filter(page => page >= leftPortionPageNumber &&  page <= rightPortionPageNumber)
                    .map(p => {
                        return <li className={`${classes.page} ${currentPage === p && classes.active}`} onClick={() => {onItemClick(p)}}>
                            {p}
                        </li>
                    })
            }
            {
                currentPortion < portionAmount && <li className={classes.page} onClick={onNextBtnClick}>Next</li>
            }
        </ul>
    )
}