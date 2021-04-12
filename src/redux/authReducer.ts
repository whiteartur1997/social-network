import { Dispatch } from 'redux';
import { FormAction, stopSubmit } from 'redux-form';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { authAPI, securityAPI } from '../API/API';
import { LoginFormValuesType } from "./../components/Login/Login";
import { ActionsTypes, AppStateType } from "./redux-store";

export type AuthType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    isFetching?: boolean
    captchaUrl: null | string
}

export type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>

const initialState: AuthType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state: AuthType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'auth/SET-USER-DATA': return { ...state, ...action.payload }
        case 'auth/SET-CAPTCHA-URL': return {...state, ...action.payload}
        default: return state;
    }
}

// actions
export const setAuthUserDataSuccess =
    (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => {
        return {
            type: 'auth/SET-USER-DATA',
            payload: {
                id: userId,
                email,
                login,
                isAuth
            }
        } as const
    }
export const setCaptchaUrlOnSuccess = (captchaUrl: string) => {
        return {
            type: 'auth/SET-CAPTCHA-URL',
            payload: { captchaUrl }
        } as const
    }

// thunks
export const setAuthUserData = (): ThunkType => async (dispatch: Dispatch) => {
    const res = await authAPI.authMe();
    if (res.resultCode === 0) {
        const { login, email, id } = res.data;
        dispatch(setAuthUserDataSuccess(id, email, login, true))
    }
}

export const loginUser =
    (loginFormData: LoginFormValuesType): ThunkType => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionsTypes | FormAction>) => {
        const res = await authAPI.login(loginFormData);
        if (res.resultCode === 0) {
            dispatch(setAuthUserData())
        } else {
            if(res.resultCode === 10) {
                dispatch(getCaptchaUrl());
            }
            const message = res.messages.length > 0 ? res.messages[0] : "Some error";
            dispatch(stopSubmit("login", { _error: message }));
        }
    }

export const logoutUser = (): ThunkType => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionsTypes>) => {
    const res = await authAPI.logout();
    if (res.resultCode === 0) {
        dispatch(setAuthUserDataSuccess(null, null, null, false))
    }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch: Dispatch) => {
    const res = await securityAPI.getCaptchaUrl();
    dispatch(setCaptchaUrlOnSuccess(res));
}

export default authReducer;