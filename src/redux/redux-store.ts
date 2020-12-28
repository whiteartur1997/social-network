import { combineReducers, createStore } from "redux";
import authReducer, { setAuthUserData } from "./authReducer";
import dialogsReducer, { sendMessage, updateNewMessageText } from "./dialogsReducer";
import profileReducer, { addPost, setUserProfile, updateNewPostText } from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducers, { followUser, setCurrentPage, setTotalUsersCount, setUsers, toggleFollowing, toggleIsFetching, unfollowUser } from "./usersReducer";

export type ActionsTypes = ReturnType<typeof addPost> |
    ReturnType<typeof updateNewPostText> |
    ReturnType<typeof sendMessage> |
    ReturnType<typeof updateNewMessageText> |
    ReturnType<typeof followUser> |
    ReturnType<typeof unfollowUser> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUsersCount> |
    ReturnType<typeof toggleIsFetching> |
    ReturnType<typeof setUserProfile> |
    ReturnType<typeof setAuthUserData> |
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
let store = createStore(reducers);

declare global {
    interface Window {
        state: any;
    }
}

window.state = store.getState();

export default store;