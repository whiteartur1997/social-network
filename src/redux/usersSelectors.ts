import { createSelector } from "reselect";
import { AppStateType } from "./redux-store";
import { UserType } from "./usersReducer";


export const getUsersSelector = (state: AppStateType) => {
    return state.usersPage.users;
}

export const getUsers = createSelector( [getUsersSelector], (users: UserType[]) => {
    return users.filter(() => true);
})

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