import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as formReducer } from "redux-form";
import thunkMiddleware from 'redux-thunk';
import appReducer, { setErrorMessage, setInitializedSuccess } from "./appReducer";
import authReducer, { setAuthUserDataSuccess, setCaptchaUrlOnSuccess } from "./authReducer";
import dialogsReducer, { sendMessage } from "./dialogsReducer";
import profileReducer, {
    addPost,
    removePost,
    setUpdatedUserAvatar,
    setUserProfileSuccess,
    setUserStatusSuccess
} from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducers, { followUserSuccess, setCurrentPage, setTotalUsersCount, setUsers, toggleFollowing, toggleIsFetching, unfollowUserSuccess } from "./usersReducer";

export type ActionsTypes = ReturnType<typeof addPost> |
    ReturnType<typeof sendMessage> |
    ReturnType<typeof followUserSuccess> |
    ReturnType<typeof unfollowUserSuccess> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUsersCount> |
    ReturnType<typeof toggleIsFetching> |
    ReturnType<typeof setUserProfileSuccess> |
    ReturnType<typeof setUserStatusSuccess> |
    ReturnType<typeof setAuthUserDataSuccess> |
    ReturnType<typeof toggleFollowing> |
    ReturnType<typeof setInitializedSuccess> |
    ReturnType<typeof removePost> |
    ReturnType<typeof setUpdatedUserAvatar> |
    ReturnType<typeof setCaptchaUrlOnSuccess> |
    ReturnType<typeof setErrorMessage>;

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducers,
    sidebar: sidebarReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

type RootReducerType = typeof reducers;
export type AppStateType = ReturnType<RootReducerType>;

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

//@ts-ignore
window.store = store;

export default store;