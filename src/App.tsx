import React from "react";
import { Route } from "react-router-dom";
import "./App.scss";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import Sidebar from "./components/Sidebar/Sidebar";
import { StoreType } from './redux/store';
import {AppStateType} from "./redux/redux-store";

type AppDataType = {
  state: AppStateType
  store: StoreType
}


const App: React.FC<AppDataType> = (props) => {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Sidebar friends={props.state.sidebar.friends} />
      <Route path="/profile"
        render={() => <Profile
          profileData={props.state.profilePage}
          // bind - привязываем контекст вызова this к store
          dispatch={props.store.dispatch.bind(props.store)}
        />}
      />
      <Route path="/dialogs"
        render={() => <Dialogs
            dialogsData={props.state.dialogsPage}
            dispatch={props.store.dispatch.bind(props.store)}
        />}
      />
      <Route path="/news" component={News} />
      <Route path="/music" component={Music} />
      <Route path="/settings" component={Settings} />
    </div>
  );
};

export default App;
