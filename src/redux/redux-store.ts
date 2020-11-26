import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import profileReducer from "./profileReducer";

// reducers - это наш state, с тремя ветками
// за св-во profilePage отвечает profileReducer и тд
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
});

type RootReducerType = typeof reducers;
export type AppStateType = ReturnType<RootReducerType>;

// отдаем редюсеры store
let store = createStore(reducers);
console.log(store);
export default store;