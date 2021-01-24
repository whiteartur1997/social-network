import { AppStateType } from "./redux-store";

// selector - это ф-ия которая принимает
// state и возвращает из него, то что нам нужно
export const getUsersSelector = (state: AppStateType) => {
    return state.usersPage.users
}

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}

export const getIsFollowing = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}