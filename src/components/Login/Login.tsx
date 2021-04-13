import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { loginUser } from "../../redux/authReducer";
import { AppStateType } from "../../redux/redux-store";
import { required } from "../../utils/validators/validator";
import { Input } from "../common/FormsControl/FormsControl";
import styles from './../common/FormsControl/FormsControl.module.scss';
import s from './Login.module.scss';

type LoginFormOwnProps = {
  captchaUrl: string | null
}

export type LoginFormValuesType = {
  login: string
  password: string
  rememberMe: boolean
  capthaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = (props) => {
  return (
    <form className={s.form} onSubmit={props.handleSubmit}>
      <div className={`${s.loginInput} ${s.inputContainer}`}>
        <Field
          validate={[required]}
          component={Input}
          name="login"
          placeholder="Login"
        />
      </div>
      <div className={`${s.loginPassword} ${s.inputContainer}`}>
        <Field
          type="password"
          validate={[required]}
          component={Input}
          name="password"
          placeholder="Password" />
      </div>
      <div className={s.checkboxContainer}>
        <Field
          component={Input}
          name="rememberMe"
          type="checkbox" /> <span>remember me</span>
      </div>
      <div className={styles.errorMessage}>{props.error}</div>
      {
        props.captchaUrl && 
        <div className={`${s.loginCaptcha} ${s.inputContainer}`}>
          <img src={props.captchaUrl} alt="captcha" />
        <Field
          validate={[required]}
          component={Input}
          name="captcha"
          placeholder="Put captcha" />
      </div>
      }
      <button className={s.loginButton}>Login</button>
    </form>
  )
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({
  form: "login"
})(LoginForm);

const Login = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth);
  const captchaUrl = useSelector<AppStateType, string | null>(state => state.auth.captchaUrl);
  const onSumbitHandler = (formData: LoginFormValuesType) => {
    dispatch(loginUser(formData));
  }
  return isAuth ?
    <Redirect to="/profile" />
    : <div className={s.container}>
        <div className={s.intro}>Login to your account</div>
          <div className={s.intro}>Test account: Email: free@samuraijs.com
              Password: free</div>
        <LoginReduxForm captchaUrl={captchaUrl} onSubmit={onSumbitHandler} />
      </div>
}

export default Login;