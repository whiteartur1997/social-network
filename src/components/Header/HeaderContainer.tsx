import React from 'react';
import { connect } from 'react-redux';
import { authMeAPI } from '../../API/API';
import { setAuthUserData } from '../../redux/authReducer';
import { AppStateType } from '../../redux/redux-store';
import Header from './Header';

type MapStateToPropsType = {
  login: string | null
  isAuth: boolean
}

type MapDispatchToPropsType = {
  setAuthUserData: (id: number, email: string, login: string) => void
}

type HeaderContainerType = MapStateToPropsType & MapDispatchToPropsType;


class HeaderContainer extends React.Component<HeaderContainerType> {
  componentDidMount() {
    authMeAPI()
      .then(data => {
        if (data.resultCode === 0) {
          const { login, email, id } = data.data;
          this.props.setAuthUserData(id, email, login)
        }
      })
  }

  render() {
    return <Header {...this.props} />
  }
}

function mapStateToProps(state: AppStateType): MapStateToPropsType {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);