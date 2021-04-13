import React, { Component } from "react";
import { connect, Provider } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch, withRouter } from "react-router-dom";
import { compose } from "redux";
import "./App.scss";
import { ErrorBar } from "./components/common/ErrorBar/ErrorBar";
import Preloader from "./components/common/Preloader/Preloader";
import HeaderContainer from "./components/Header/HeaderContainer";
import { WithSuspenseComponent } from "./components/HOC/WithSuspenseComponent";
import Login from "./components/Login/Login";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import { initializeApp, setErrorMessage } from "./redux/appReducer";
import store, { AppStateType } from "./redux/redux-store";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


type MapStateToPropsType = {
    initialized: boolean
    error: null | string
}

type MapDispatchToPropsType = {
    initializeApp: () => void
    setErrorMessage: (value: string | null) => void
}

type AppComponentStateType = MapStateToPropsType & MapDispatchToPropsType;

class App extends Component<AppComponentStateType> {

    onCloseErrorHandler = () => {
        this.props.setErrorMessage(null);
    }


    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) return <Preloader />
        return (
            <div className="App">
                <HeaderContainer />
                <Navbar />
                <SidebarContainer />
                <Switch>
                    <Route exact path="/" render={() => <Redirect to="/profile/" />} />
                    <Route path="/login" render={() => <Login />} />
                    <Route path="/profile/:userId?"
                        render={WithSuspenseComponent(ProfileContainer)}
                    />
                    <Route path="/dialogs"
                        render={WithSuspenseComponent(DialogsContainer)}
                    />
                    <Route path="/users" render={() => <UsersContainer />} />
                    <Route path="/news" component={News} />
                    <Route path="/music" component={Music} />
                    <Route path="/settings" component={Settings} />
                    <Route path="*" render={() => <div>404 NOT FOUND</div>} />
                </Switch>
                {this.props.error && <ErrorBar handleError={this.props.setErrorMessage} errorMessage={this.props.error} />}
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        initialized: state.app.initialized,
        error: state.app.error
    }
}

const ContainerApp = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, { initializeApp, setErrorMessage })
)(App);

export const SocialNetworkApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <ContainerApp />
        </Provider>
    </BrowserRouter>
}
