import React from "react";
import { Route } from "react-router-dom";
import "./App.scss";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Settings from "./components/Settings/Settings";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App: React.FC = () => {
  return (
    <div className="App">
      <HeaderContainer />
      <Navbar />
      <SidebarContainer />
      <Route path="/profile/:userId?"
        render={() => <ProfileContainer />}
      />
      <Route path="/dialogs"
        render={() => <DialogsContainer />}
      />
      <Route path="/users" render={() => <UsersContainer />} />
      <Route path="/news" component={News} />
      <Route path="/music" component={Music} />
      <Route path="/settings" component={Settings} />
    </div>
  );
};

export default App;
