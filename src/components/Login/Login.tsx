import React from "react";
import { useDispatch } from "react-redux";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { loginUser } from "../../redux/authReducer";
import { required } from "../../utils/validators/validator";
import { Input } from "../common/FormsControl/FormsControl";
import s from './Login.module.scss'

export type LoginFormDataType = {
  login: string
  password: string
  rememberMe?: boolean
}

const LoginForm: React.FC<InjectedFormProps<LoginFormDataType>> = (props) => {
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
      <button className={s.loginButton}>Login</button>
    </form>
  )
}

const LoginReduxForm = reduxForm<LoginFormDataType>({
  form: "login"
})(LoginForm);

const Login = () => {
  const dispatch = useDispatch();
  const onSumbitHandler = (formData: LoginFormDataType) => {
    dispatch(loginUser(formData));
  }

  return (
    <div className={s.container}>
      <div className={s.intro}>Login to your account</div>
      <LoginReduxForm onSubmit={onSumbitHandler} />
    </div>
  )
}

export default Login;