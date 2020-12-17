import React from "react";
import { Route } from "react-router-dom";
import "./App.scss";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <SidebarContainer />
      <Route path="/profile"
        render={() => <Profile />}
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
