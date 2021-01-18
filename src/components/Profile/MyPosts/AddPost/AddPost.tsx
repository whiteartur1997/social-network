import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { maxLength30, required } from '../../../../utils/validators/validator';
import { Textarea } from '../../../common/FormsControl/FormsControl';
import avatar from './../../../../assets/img/batman.png';
import classes from './AddPost.module.scss';

type AddPostType = {
  addPost: (newPostText: AddPostFormType) => void
}

export type AddPostFormType = {
  post: string
}

const AddPostForm: React.FC<InjectedFormProps<AddPostFormType>> = (props) => {

  return (
    <form className={classes.addPost__form} onSubmit={props.handleSubmit}>
      <img className={classes.addPost__avatar} src={avatar} alt={"avatar"} />
      <div>
        <Field 
          name="post" 
          component={Textarea}
          placeholder={"What's new?"}
          classNameString={"formControlPostTextarea"} 
          validate={[required, maxLength30]} />
        <button className={classes.addPost__btn}>Add Post</button>
      </div>
    </form>
  )
}

const ReduxAddPostForm = reduxForm<AddPostFormType>(
  { form: "Add Post" }
)(AddPostForm);


const AddPost: React.FC<AddPostType> = (props) => {

  const submitHandler = (newPostText: AddPostFormType) => {
    props.addPost(newPostText);
  }

  return (
    <div className={classes.addPost}>
      <ReduxAddPostForm onSubmit={submitHandler} />
    </div>
  )
}

export default AddPost;