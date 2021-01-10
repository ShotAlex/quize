import React from 'react'
import classes from './Input.module.css'

const isInvalid = ({valid, touched, shouldValidate}) => !valid && touched && shouldValidate

const Input = props => {
  const inputType = props.type || 'text'
  const cls = [classes.Input]
  const htmlFor = `${inputType}-${Math.random()}}`

  if(isInvalid(props)) cls.push(classes.invalid)

  const errorLabel = isInvalid(props)
    ? <span className={classes.invalid}>
        {props.errorMessage || 'Input here'}
      </span>
    : null

  return (
    <div className={cls.join(' ')}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input
        type={inputType}
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}
      />

      {errorLabel}
    </div>
  );
};

export default Input;