import {ThunkDispatch} from 'redux-thunk';
import {setAuthUserData} from './authReducer';
import {ActionsTypes, AppStateType} from "./redux-store";

export type AppReducerType = {
    initialized: boolean
    error: null | string
}


const initialState: AppReducerType = {
    initialized: false,
    error: null
}

const appReducer = (state: AppReducerType = initialState, action: ActionsTypes): AppReducerType => {
    switch (action.type) {
        case 'app/SUCCESS-INITIALIZED': {
            return {
                ...state,
                initialized: action.initialized
            }
        }
        case 'app/SET-ERROR': {
            return {
                ...state,
                error: action.error
            }
        }
        default:
            return state;
    }
}

// actions
export const setInitializedSuccess = () => {
    return {type: 'app/SUCCESS-INITIALIZED', initialized: true} as const
}

export const setErrorMessage = (errorMessage: string | null) => {
    return {type: 'app/SET-ERROR', error: errorMessage} as const
}

// thunks
export const initializeApp = () => (dispatch: ThunkDispatch<AppStateType, unknown, ActionsTypes>) => {
    Promise.all([dispatch(setAuthUserData())])
        .then(() => {
            dispatch(setInitializedSuccess())
        })
}

export default appReducer;