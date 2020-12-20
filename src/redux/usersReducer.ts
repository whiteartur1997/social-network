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
}

const initialState: UsersPageType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false
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

export const followUser = (userID: number) => {
  return {
    type: 'FOLLOW',
    id: userID
  } as const
}

export const unfollowUser = (userID: number) => {
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

export default usersReducer;