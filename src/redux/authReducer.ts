import { Dispatch } from 'redux';
import { authAPI } from '../API/API';
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

export const setAuthUserDataSuccess =
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

export const setAuthUserData = () => {
  return (dispatch: Dispatch) => {
    authAPI.authMe()
      .then(data => {
        if (data.resultCode === 0) {
          const { login, email, id } = data.data;
          dispatch(setAuthUserDataSuccess(id, email, login))
        }
      })
  }
}


export default authReducer;