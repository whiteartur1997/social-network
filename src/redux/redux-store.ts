import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import authReducer, { setAuthUserDataSuccess } from "./authReducer";
import dialogsReducer, { sendMessage, updateNewMessageText } from "./dialogsReducer";
import profileReducer, { addPost, setUserProfileSuccess, updateNewPostText } from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducers, { followUserSuccess, setCurrentPage, setTotalUsersCount, setUsers, toggleFollowing, toggleIsFetching, unfollowUserSuccess } from "./usersReducer";

export type ActionsTypes = ReturnType<typeof addPost> |
    ReturnType<typeof updateNewPostText> |
    ReturnType<typeof sendMessage> |
    ReturnType<typeof updateNewMessageText> |
    ReturnType<typeof followUserSuccess> |
    ReturnType<typeof unfollowUserSuccess> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUsersCount> |
    ReturnType<typeof toggleIsFetching> |
    ReturnType<typeof setUserProfileSuccess> |
    ReturnType<typeof setAuthUserDataSuccess> |
    ReturnType<typeof toggleFollowing>;


// reducers - это наш state, с тремя ветками
// за св-во profilePage отвечает profileReducer и тд
const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducers,
    sidebar: sidebarReducer,
    auth: authReducer
});

type RootReducerType = typeof reducers;
export type AppStateType = ReturnType<RootReducerType>;

// отдаем редюсеры store
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

declare global {
    interface Window {
        state: any;
    }
}

window.state = store.getState();

export default store;