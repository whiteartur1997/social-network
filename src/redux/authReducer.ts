import { Dispatch } from 'redux';
import { authAPI } from '../API/API';
import { ActionsTypes, AppStateType } from "./redux-store";
import {LoginFormDataType} from "./../components/Login/Login";
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { FormAction, stopSubmit } from 'redux-form';

export type AuthType = {
  id: number | null
  email: string | null
  login: string | null
  isAuth: boolean
  isFetching?: boolean
}

export type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>

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
        ...action.payload,
      }
    }

    default:
      return state;
  }
}

export const setAuthUserDataSuccess =
  (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
      type: 'SET-USER-DATA',
      payload: {
        id: userId,
        email,
        login,
        isAuth: isAuth
      }
    } as const
  }

export const setAuthUserData = (): ThunkType => {
  return (dispatch: Dispatch) => {
    return authAPI.authMe()
      .then(data => {
        if (data.resultCode === 0) {
          const { login, email, id } = data.data;
          dispatch(setAuthUserDataSuccess(id, email, login, true))
        }
      })
  }
}

export const loginUser = (loginFormData: LoginFormDataType): ThunkType => {
  return (dispatch: ThunkDispatch<AppStateType, unknown, ActionsTypes | FormAction>) => {
    authAPI.login(loginFormData)
      .then(res => {
        if(res.resultCode === 0) dispatch(setAuthUserData())
        else {
          const message = res.messages.length > 0 ? res.messages[0] : "Some error";
          dispatch(stopSubmit("login", {_error: message}));
        }
      })
  }
}

export const logoutUser = (): ThunkType => {
  return (dispatch: ThunkDispatch<AppStateType, unknown, ActionsTypes>) => {
    authAPI.logout()
      .then(res => {
        if(res.resultCode === 0) dispatch(setAuthUserDataSuccess(null, null, null, false))
      })
  }
}


export default authReducer;