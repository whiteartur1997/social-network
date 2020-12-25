import { ActionsTypes } from "./redux-store";

export type AuthType = {
  id: number | null
  email: string | null
  login: string | null
  isAuth: boolean
  isFetching?: boolean
}

const initialState: AuthType = {
  id: null,
  email: null,
  login: null,
  isAuth: false
}

const authReducer = (state: AuthType = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case 'SET-USER-DATA': {
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    }

    default:
      return state;
  }
}

export const setAuthUserData =
  (userId: number, email: string, login: string) => {
    return {
      type: 'SET-USER-DATA',
      data: {
        id: userId,
        email,
        login,
      }
    } as const
  }

export default authReducer;