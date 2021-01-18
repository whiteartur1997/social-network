import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { maxLength50, required } from '../../../../utils/validators/validator';
import { Textarea } from '../../../common/FormsControl/FormsControl';
import classes from './AddMessage.module.scss';

type AddMessageType = {
  sendMessage: (newMessage: string) => void
}

type AddMessageFormType = {
  newMessage: string
}

const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {
  return (
    <form className={classes.newMessage} onSubmit={props.handleSubmit}>
      <Field 
        component={Textarea} 
        name="newMessage" 
        placeholder="Write your reply..."
        validate={[required, maxLength50]} 
        classNameString="formControlMessageTextarea" />
      <div className={classes.newMessage__bottom}>
        <div className={classes.newMessage__attachments}>
          <i className="fas fa-paperclip"></i>
        </div>
        <button className={classes.newMessage__btn}>Send Message</button>
      </div>
    </form>
  )
}

const ReduxAddMessageForm = reduxForm<AddMessageFormType>({form: "Add Message"})(AddMessageForm)

const AddMessage: React.FC<AddMessageType> = (props) => {

  const sendMessageCallback = (newMessageText: AddMessageFormType) => {
    props.sendMessage(newMessageText.newMessage)
  }

  return(
    <ReduxAddMessageForm onSubmit={sendMessageCallback} />
  )
}

export default AddMessage;