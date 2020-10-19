import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <Route path="/profile" component={Profile} />
        <Route path="/dialogs" component={Dialogs} />
        <Route path="/news" component={News}/>
        <Route path="/music" component={Music}/>
        <Route path="/settings" component={Settings}/>
      </div>
    </BrowserRouter>
  );
};

export default App;
