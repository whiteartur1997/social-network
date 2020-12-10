import { ActionsTypes } from "./store";

export type UserType = {
  id: number
  name: string
  surname: string
  location: {
    city: string
    country: string
  }
  friends: number
  photos: number
  avatar: string
  backImage: string
  status: string
  isFollowed: boolean
}

type UsersType = {
  users: UserType[]
}

const initialState: UsersType = {
  users: [
    
  ]
}

function usersReducer(state = initialState, action: ActionsTypes) {
  switch(action.type) {
    case 'FOLLOW':
      return {
        ...state, 
        users: state.users.map(u => {
          if(u.id === action.id) {
            return {...u, isFollowed: true}
          }
          return u;
        })
      }
    case 'UNFOLLOW':
      return {
        ...state,
        users: state.users.map(u => {
          if(u.id === action.id) {
            return { ...u, isFollowed: false}
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