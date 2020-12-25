import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/authReducer';
import { AppStateType } from '../../redux/redux-store';
import Header from './Header';

type AuthResponseType = {
  resultCode: number
  data: {
    id: number
    email: string
    login: string
  }
}

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
    axios.get<AuthResponseType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    })
      .then(response => {
        if (response.data.resultCode === 0) {
          const { login, email, id } = response.data.data;
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