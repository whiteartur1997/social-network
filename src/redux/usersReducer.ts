import {Dispatch} from 'redux';
import {CommonResponseType, usersAPI} from "../API/API";
import {ActionsTypes} from "./redux-store";
import {updateObjInArray} from "../utils/object-helpers/obj-helper";

export type UserType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: {
        small: null | string
        large: null | string
    }
    status: null | string
    followed: boolean
}

export type UsersPageType = {
    users: UserType[],
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

const initialState: UsersPageType = {
    users: [],
    pageSize: 33,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

function usersReducer(state = initialState, action: ActionsTypes): UsersPageType {
    switch (action.type) {
        case 'users/FOLLOW':
            return {...state, users: updateObjInArray(state.users, action.id, "id", {followed: true})}
        case 'users/UNFOLLOW':
            return {...state, users: updateObjInArray(state.users, action.id, "id", {followed: false})}
        case 'users/SET-USERS':
            return {...state, users: [...action.users]}
        case 'users/SET-CURRENT-PAGE':
            return {...state, currentPage: action.pageNumber}
        case 'users/SET-TOTAL-USERS':
            return {...state, totalUsersCount: action.totalUsers}
        case 'users/TOGGLE-FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'users/TOGGLE-FOLLOWING':
            return {
                ...state, followingInProgress: action.isFollowing
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id !== action.userID)
            }
        default:
            return state
    }
}

export const setUsers = (users: UserType[]) => {
    return {type: 'users/SET-USERS', users: users} as const
}

export const followUserSuccess = (userID: number) => {
    return {type: 'users/FOLLOW', id: userID} as const
}

export const unfollowUserSuccess = (userID: number) => {
    return {type: 'users/UNFOLLOW', id: userID} as const
}

export const setCurrentPage = (pageNumber: number) => {
    return {type: 'users/SET-CURRENT-PAGE', pageNumber} as const
}

export const setTotalUsersCount = (totalUsers: number) => {
    return {type: 'users/SET-TOTAL-USERS', totalUsers} as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {type: 'users/TOGGLE-FETCHING', isFetching} as const
}

export const toggleFollowing = (isFollowing: boolean, userID: number) => {
    return {type: 'users/TOGGLE-FOLLOWING', isFollowing, userID} as const
}

// thunks
export const requestUsers = (currentPage: number, pageSize: number) => async (dispatch: Dispatch) => {
    try {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));
        const res = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false));
        dispatch(setTotalUsersCount(res.totalCount));
        dispatch(setUsers(res.items));
    } catch {
        dispatch(setUsers([]));
    }
}

const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: (userId: number) => Promise<CommonResponseType<{}>>, action: (userId: number) => {}) => {
  dispatch(toggleFollowing(true, userId));
  const res = await apiMethod(userId);
  if (res.resultCode === 0) {
    dispatch(action(userId));
  }
  dispatch(toggleFollowing(false, userId));
}

export const followUser = (userId: number) => async (dispatch: Dispatch) => {
   followUnfollowFlow(dispatch, userId, usersAPI.followUser, followUserSuccess);
}

export const unfollowUser = (userId: number) => async (dispatch: Dispatch) => {
  followUnfollowFlow(dispatch, userId, usersAPI.unfollowUser, unfollowUserSuccess);
}

export default usersReducer;