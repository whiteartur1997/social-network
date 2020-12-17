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
}

const initialState: UsersPageType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1
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
    default:
      return state
  }
}

export const setUsersAC = (users: UserType[]) => {
  return {
    type: 'SET-USERS',
    users: users
  } as const
}

export const followAC = (userID: number) => {
  return {
    type: 'FOLLOW',
    id: userID
  } as const
}

export const unfollowAC = (userID: number) => {
  return {
    type: 'UNFOLLOW',
    id: userID
  } as const
}

export const setCurrentPageAC = (pageNumber: number) => {
  return {
    type: 'SET-CURRENT-PAGE',
    pageNumber
  } as const
}

export const setTotalUsersAC = (totalUsers: number) => {
  return {
    type: 'SET-TOTAL-USERS',
    totalUsers
  } as const
}

export default usersReducer;