import React, { ReactNode } from "react"
import { ActionsTypes } from "../../../redux/redux-store";
import styles from "./FormsControl.module.scss";

type FormControlType = {
    input: InputType
    meta: MetaType
    placeholder?: string
    children:  ReactNode
    classnamestring: string
}

type InputType = {
    name: string
    onBlur: (e: any) => void
    onChange: (e: any) => void
    onDragStart: (e: any) => void
    onDrop: (e: any) => void
    onFocus: (e: any) => void
    value: string
}

type MetaType = {
    active: boolean
    asyncValidating: boolean
    autofilled: boolean
    dirty: boolean
    dispatch: (action: ActionsTypes) => void
    error: string
    form: string
    initial: undefined | string
    invalid: true
    pristine: true
    submitFailed: boolean
    submitting: boolean
    touched: boolean
    valid: boolean
    visited: boolean
    warning: undefined | string
}


const FormControl: React.FC<FormControlType> = ({input, meta, children, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <>
            {children}
            {hasError && <span className={styles.errorMessage}>{meta.error}</span>}
        </>
    )
}

export const Textarea: React.FC<FormControlType> = (props) => {
    const {input, meta, children, ...restProps} = props;
    const hasError = meta.touched && meta.error;
    return (
        <FormControl {...props}>
            <textarea className={`${styles[props.classnamestring]} ${hasError ? styles.error : ""}`} {...input} {...restProps} />
        </FormControl>
    )    
}

export const Input: React.FC<FormControlType> = (props) => {
    const {input, meta, children, ...restProps} = props;
    const hasError = meta.touched && meta.error;
    return (
        <>
           <FormControl {...props}>
                <input className={`${styles[props.classnamestring]} ${hasError ? styles.error : ""}`} {...input} {...restProps} />
            </FormControl>
        </>
    )
}