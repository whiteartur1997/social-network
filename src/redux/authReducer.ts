import {Dispatch} from 'redux';
import {FormAction, stopSubmit} from 'redux-form';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {authAPI} from '../API/API';
import {LoginFormDataType} from "./../components/Login/Login";
import {ActionsTypes, AppStateType} from "./redux-store";

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
        case 'auth/SET-USER-DATA': return {...state, ...action.payload}
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

// thunks
export const setAuthUserData = (): ThunkType => async (dispatch: Dispatch) => {
    const res = await authAPI.authMe();
    if (res.resultCode === 0) {
        const {login, email, id} = res.data;
        dispatch(setAuthUserDataSuccess(id, email, login, true))
    }
}

export const loginUser =
    (loginFormData: LoginFormDataType): ThunkType => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionsTypes | FormAction>) => {
        const res = await authAPI.login(loginFormData);
        if (res.resultCode === 0) {
            dispatch(setAuthUserData())
        } else {
            const message = res.messages.length > 0 ? res.messages[0] : "Some error";
            dispatch(stopSubmit("login", {_error: message}));
        }
    }

export const logoutUser = (): ThunkType => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionsTypes>) => {
    const res = await authAPI.logout();
    if (res.resultCode === 0) {
        dispatch(setAuthUserDataSuccess(null, null, null, false))
    }
}

export default authReducer;