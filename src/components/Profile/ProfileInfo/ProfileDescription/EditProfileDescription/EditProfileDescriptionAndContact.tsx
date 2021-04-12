import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { UserProfileType } from "../../../../../redux/profileReducer";
import { required } from "../../../../../utils/validators/validator";
import { Input, Textarea } from "../../../../common/FormsControl/FormsControl";
import { UserDescriptionFormDataType } from "../ProfileDescription";
import classes from "./EditProfileDescriptionAndContact.module.scss";
import styles from './../../../../../components/common/FormsControl/FormsControl.module.scss';

type EditProfileDescriptionType = {
    handleSubmit: (formData: UserDescriptionFormDataType) => void
    initialValues: UserProfileType
}

const EditProfileDescriptionForm: React.FC<EditProfileDescriptionType & InjectedFormProps<{}, EditProfileDescriptionType>> = ({ initialValues, handleSubmit, error }) => {
    return (
        <form className={classes.editForm} onSubmit={handleSubmit}>
            <div>
                <label className={classes.inputLabel}>Full name:</label>
                <Field
                    className={`${classes.inputField}`}
                    validate={[required]}
                    component={Input}
                    name="fullName"
                    placeholder="Write your full name" />
            </div>
            <div>
                <label className={classes.inputLabel}>About me:</label>
                <Field
                    className={classes.inputField}
                    // value={props.profile.aboutMe}
                    validate={[required]}
                    component={Textarea}
                    name="aboutMe"
                    placeholder="Describe yourself" />
            </div>
            <div>
                <label className={classes.inputLabel}>Looking for a job:</label>
                <Field
                    component={Input}
                    type="checkbox"
                    name="lookingForAJob" />
            </div>
            <div>
                <label className={classes.inputLabel}>My skills:</label>
                <Field
                    className={classes.inputField}
                    validate={[required]}
                    component={Textarea}
                    name="lookingForAJobDescription"
                    placeholder="What you know and you can" />
            </div>
            {
                Object.entries(initialValues.contacts).map(([key, value]) => {
                    return (
                        <div key={`${key}+${value}`}>
                            <label className={classes.inputLabel}>{key}:</label>
                            <Field
                                className={classes.inputField}
                                component={Input}
                                placeholder={key}
                                name={`contacts[${key}]`} />
                        </div>
                    )
                })
            }
            <div className={styles.errorMessage}>{error}</div>
            <button className={classes.submitEdit}>Submit editing</button>
        </form>
    )
}

export const EditProfileDescriptionReduxForm = reduxForm<{}, EditProfileDescriptionType>({
    form: "profileDescription"
})(EditProfileDescriptionForm)
