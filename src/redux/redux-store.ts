import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

// reducers - это наш state, с тремя ветками
// за св-во profilePage отвечает profileReducer и тд
const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
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