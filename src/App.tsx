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
import { StateType } from './redux/state';

type AppDataType = {
  state: StateType
  addPost: () => void
  onNewPostMessageChange: (message: string) => void
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
          addPost={props.addPost}
          onNewPostMessageChange={props.onNewPostMessageChange} />} />
      <Route path="/dialogs"
        render={() => <Dialogs dialogsData={props.state.dialogsPage} />} />
      <Route path="/news" component={News} />
      <Route path="/music" component={Music} />
      <Route path="/settings" component={Settings} />
    </div>
  );
};

export default App;
