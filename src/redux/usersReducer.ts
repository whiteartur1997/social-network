import { Dispatch } from 'redux';
import { usersAPI } from "../API/API";
import { ActionsTypes } from "./redux-store";

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
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
}

function usersReducer(state = initialState, action: ActionsTypes): UsersPageType {
  switch (action.type) {
    case 'FOLLOW':
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.id) {
            return { ...u, followed: true }
          }
          return u;
        })
      }
    case 'UNFOLLOW':
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.id) {
            return { ...u, followed: false }
          }
          return u;
        })
      }
    case 'SET-USERS':
      return {
        ...state,
        users: [...action.users]
      }
    case 'SET-CURRENT-PAGE':
      return {
        ...state,
        currentPage: action.pageNumber
      }
    case 'SET-TOTAL-USERS':
      return {
        ...state,
        totalUsersCount: action.totalUsers
      }
    case 'TOGGLE-FETCHING':
      return {
        ...state,
        isFetching: action.isFetching
      }
    case 'TOGGLE-FOLLOWING':
      return {
        ...state,
        followingInProgress: action.isFollowing
          ? [...state.followingInProgress, action.userID]
          : state.followingInProgress.filter(id => id !== action.userID)
      }
    default:
      return state
  }
}

export const setUsers = (users: UserType[]) => {
  return {
    type: 'SET-USERS',
    users: users
  } as const
}

export const followUserSuccess = (userID: number) => {
  return {
    type: 'FOLLOW',
    id: userID
  } as const
}

export const unfollowUserSuccess = (userID: number) => {
  return {
    type: 'UNFOLLOW',
    id: userID
  } as const
}

export const setCurrentPage = (pageNumber: number) => {
  return {
    type: 'SET-CURRENT-PAGE',
    pageNumber
  } as const
}

export const setTotalUsersCount = (totalUsers: number) => {
  return {
    type: 'SET-TOTAL-USERS',
    totalUsers
  } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
  return {
    type: 'TOGGLE-FETCHING',
    isFetching
  } as const
}

export const toggleFollowing = (isFollowing: boolean, userID: number) => {
  return {
    type: 'TOGGLE-FOLLOWING',
    isFollowing,
    userID
  } as const
}

// thunk creator
export const requestUsers = (currentPage: number, pageSize: number) => {
  return (dispatch: (action: ActionsTypes) => void) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    usersAPI.getUsers(currentPage, pageSize)
      .then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setTotalUsersCount(data.totalCount));
        dispatch(setUsers(data.items));
      }).catch(() => {
        dispatch(setUsers([]));
      })
  }
}

export const followUser = (userId: number) => {
  return (dispatch: (action: ActionsTypes) => void) => {
    dispatch(toggleFollowing(true, userId));
    usersAPI.followUser(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(followUserSuccess(userId));
      }
      dispatch(toggleFollowing(false, userId));
    })
  }
}

export const unfollowUser = (userId: number) => {
  return (dispatch: Dispatch) => {
    dispatch(toggleFollowing(true, userId));
    usersAPI.unfollowUser(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(unfollowUserSuccess(userId));
      }
    })
    dispatch(toggleFollowing(false, userId));
  }
}

export default usersReducer;