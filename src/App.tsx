import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { DialogItemType, MessageItemType, PostType } from ".";
import "./App.scss";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";

type AppDataType = {
  posts: Array<PostType>
  messages: Array<MessageItemType>
  dialogs: Array<DialogItemType>
}


const App: React.FC<AppDataType> = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <Route path="/profile" render={() => <Profile posts={props.posts} />} />
        <Route path="/dialogs" render={() => <Dialogs dialogs={props.dialogs} messages={props.messages} />} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </BrowserRouter>
  );
};

export default App;
