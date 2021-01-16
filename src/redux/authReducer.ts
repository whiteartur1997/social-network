import { Dispatch } from 'redux';
import { authAPI } from '../API/API';
import { ActionsTypes, AppStateType } from "./redux-store";
import {LoginFormDataType} from "./../components/Login/Login";
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

export type AuthType = {
  id: number | null
  email: string | null
  login: string | null
  isAuth: boolean
  isFetching?: boolean
}

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>

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

export const setAuthUserData = (): ThunkType => {
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

export const loginUser = (loginFormData: LoginFormDataType): ThunkType => {
  return (dispatch: ThunkDispatch<AppStateType, unknown, ActionsTypes>) => {
    authAPI.login(loginFormData)
      .then(res => {
        console.log(res.data);
        dispatch(setAuthUserData())
      })
  }
}


export default authReducer;