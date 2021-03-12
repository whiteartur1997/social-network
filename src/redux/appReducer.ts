import {ThunkDispatch} from 'redux-thunk';
import {setAuthUserData} from './authReducer';
import {ActionsTypes, AppStateType} from "./redux-store";

export type AppReducerType = {
    initialized: boolean
}


const initialState: AppReducerType = {
    initialized: false
}

const appReducer = (state: AppReducerType = initialState, action: ActionsTypes): AppReducerType => {
    switch (action.type) {
        case 'app/SUCCESS-INITIALIZED': {
            return {
                ...state,
                initialized: action.initialized
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

// thunks
export const initializeApp = () => (dispatch: ThunkDispatch<AppStateType, unknown, ActionsTypes>) => {
    Promise.all([dispatch(setAuthUserData())])
        .then(() => {
            dispatch(setInitializedSuccess())
        })
}

export default appReducer;