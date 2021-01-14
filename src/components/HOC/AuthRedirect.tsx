import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { AppStateType } from "../../redux/redux-store";


function mapStateToProps(state: AppStateType) {
  return {
    isAuth: state.auth.isAuth
  } as MapPropsType;
}

type MapPropsType = {
  isAuth: boolean
}


// часто когда создаем HOC, мы дописываем, что он дает компоненту
// дописывая в начало 'with'
export function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {
  const WrappedAuthRedirect: React.FC<MapPropsType & {}> = (props) => {
    debugger
    let { isAuth, ...restProps } = props;
    if (!props.isAuth)
      return <Redirect to='/login' />;
    return <WrappedComponent {...restProps as WCP} />;
  }

  return connect<MapPropsType, {}, WCP, AppStateType>(mapStateToProps, {})(WrappedAuthRedirect)
}