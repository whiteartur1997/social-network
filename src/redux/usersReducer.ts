import { ActionsTypes } from "./store";

type UserType = {
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
    // {
    //   id: 1,
    //   name: "Lady",
    //   surname: "Gaga",
    //   location: {
    //     city: "New-York",
    //     country: "USA"
    //   },
    //   friends: 102,
    //   photos: 32,
    //   avatar: require('./../img/gaga.png'),
    //   backImage: require('./../img/userBG.jpg'),
    //   status: "Alejandro...",
    //   isFollowed: true
    // },
    // {
    //   id: 2,
    //   name: "Wilson",
    //   surname: "Deadpool",
    //   location: {
    //     city: "Brooklyn",
    //     country: "USA"
    //   },
    //   friends: 243,
    //   photos: 2,
    //   avatar: require('./../img/deadpool.png'),
    //   backImage: require('./../img/userBG.jpg'),
    //   status: "Like read comics",
    //   isFollowed: false
    // },
    // {
    //   id: 3,
    //   name: "Tupac",
    //   surname: "Shakur",
    //   location: {
    //     city: "Los-Angeles",
    //     country: "USA"
    //   },
    //   friends: 44,
    //   photos: 5,
    //   avatar: require('./../img/tupac.png'),
    //   backImage: require('./../img/userBG.jpg'),
    //   status: "Thug life",
    //   isFollowed: false
    // },
    // {
    //   id: 4,
    //   name: "Vlad",
    //   surname: "Yama",
    //   location: {
    //     city: "Kyiv",
    //     country: "Ukraine"
    //   },
    //   friends: 891,
    //   photos: 77,
    //   avatar: require('./../img/yama.png'),
    //   backImage: require('./../img/userBG.jpg'),
    //   status: "Cha cha cha",
    //   isFollowed: true
    // },
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

export const setUsers = (users: UserType[]) => {
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