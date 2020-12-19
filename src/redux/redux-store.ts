import { combineReducers, createStore } from "redux";
import dialogsReducer, { sendMessageAC, updateNewMessageTextAC } from "./dialogsReducer";
import profileReducer, { addPostAC, updateNewPostTextAC } from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducers, { followAC, setCurrentPageAC, setTotalUsersAC, setUsersAC, toggleIsFetchingAC, unfollowAC } from "./usersReducer";

export type ActionsTypes = ReturnType<typeof addPostAC> |
    ReturnType<typeof updateNewPostTextAC> |
    ReturnType<typeof sendMessageAC> |
    ReturnType<typeof updateNewMessageTextAC> |
    ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC> |
    ReturnType<typeof setUsersAC> |
    ReturnType<typeof setCurrentPageAC> |
    ReturnType<typeof setTotalUsersAC> |
    ReturnType<typeof toggleIsFetchingAC>;


// reducers - это наш state, с тремя ветками
// за св-во profilePage отвечает profileReducer и тд
const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducers,
    sidebar: sidebarReducer
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