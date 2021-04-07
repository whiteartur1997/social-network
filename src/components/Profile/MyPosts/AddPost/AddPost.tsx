import React from 'react';
import {Field, InjectedFormProps, reduxForm, reset} from 'redux-form';
import { maxLength30, required } from '../../../../utils/validators/validator';
import { Textarea } from '../../../common/FormsControl/FormsControl';
import classes from './AddPost.module.scss';
import {useDispatch, useSelector} from "react-redux";
import { AppStateType } from '../../../../redux/redux-store';

type AddPostType = {
  addPost: (newPostText: AddPostFormType) => void
}

export type AddPostFormType = {
  post: string
}

const AddPostForm: React.FC<InjectedFormProps<AddPostFormType>> = (props) => {

  const userAvatar = useSelector<AppStateType, null | string| undefined>(state => state.profilePage.profile?.photos.small);

  return (
    <form className={classes.addPost__form} onSubmit={props.handleSubmit}>
      <img className={classes.addPost__avatar} src={userAvatar || undefined} alt={"avatar"} />
      <div>
        <Field 
          name="post" 
          component={Textarea}
          placeholder={"What's new?"}
          classnamestring={"formControlPostTextarea"} 
          validate={[required, maxLength30]} />
        <button className={classes.addPost__btn}>Add Post</button>
      </div>
    </form>
  )
}

const ReduxAddPostForm = reduxForm<AddPostFormType>(
  { form: "Add Post", }
)(AddPostForm);


const AddPost: React.FC<AddPostType> = (props) => {
  const dispatch = useDispatch();
  const submitHandler = (newPostText: AddPostFormType) => {
    props.addPost(newPostText);
    dispatch(reset("Add Post"));
  }

  return (
    <div className={classes.addPost}>
      <ReduxAddPostForm onSubmit={submitHandler} />
    </div>
  )
}

export default AddPost;