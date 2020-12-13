import { ActionsTypes } from "./store";

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

type UsersPageType = {
  users: UserType[]
}

const initialState: UsersPageType = {
  users: []
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
        users: [...state.users, ...action.users]
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

export default usersReducer;