import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { setAuthUserData } from './authReducer';
import { ActionsTypes, AppStateType } from "./redux-store";

export type AppReducerType = {
    initialized: boolean
}

export type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>

const initialState: AppReducerType = {
    initialized: false
}

const appReducer = (state: AppReducerType = initialState, action: ActionsTypes): AppReducerType => {
    switch (action.type) {
        case 'SUCCESS-INITIALIZED': {
            return {
                ...state,
                initialized: action.initialized
            }
        }

        default:
            return state;
    }
}

export const setInitializedSuccess = () => {
    return {
        type: 'SUCCESS-INITIALIZED',
        initialized: true
    } as const
}

export const initializeApp = () => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, ActionsTypes>) => {
        Promise.all([dispatch(setAuthUserData())])
            .then(() => {
                dispatch(setInitializedSuccess())
            })
    }
}

export default appReducer;