import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import { compose } from "redux";
import "./App.scss";
import Preloader from "./components/common/Preloader";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Settings from "./components/Settings/Settings";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import { initializeApp } from "./redux/appReducer";
import { AppStateType } from "./redux/redux-store";

type MapStateToPropsType = {
  initialized: boolean
}

type MapDispatchToPropsType = {
  initializeApp: () => void
}

type AppComponentStateType = MapStateToPropsType & MapDispatchToPropsType;

class App extends Component<AppComponentStateType> {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if(!this.props.initialized) return <Preloader />
    return (
      <div className="App">
        <HeaderContainer />
        <Navbar />
        <SidebarContainer />
        <Route path="/login" render={() => <Login />} />
        <Route path="/profile/:userId?"
          render={() => {
            return <ProfileContainer />
          }}
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
  }
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    initialized: state.app.initialized
  }
}

export default compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
