import React, {Component} from 'react'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'
import classes from './Auth.module.css'
import is from 'is_js'

class Auth extends Component {
  state = {
    isFormValid: false,
    formControls: {
      email: {
        value: '',
        type: 'email',
        label: 'Email',
        errorMessage: 'Input correct email',
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true
        }
      },
      password: {
        value: '',
        type: 'password',
        label: 'Password',
        errorMessage: 'Input correct password',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6
        }
      }
    }
  }

  loginHandler = () => {}
  registerHandler = () => {}
  submitHandler = event => event.preventDefault()

  validateControl(value, validation) {
    if (!validation) return true

    let isValid = true
    if(validation.required) {
      isValid = value.trim() !== '' && isValid
    }
    if(validation.email) {
      isValid = is.email(value) && isValid
    }
    if(validation.minLength) {
      isValid = value.length >= validation.minLength && isValid
    }

    return  isValid
  }

  onChangeHandler = (event, controlName) => {
    console.log(controlName, event.target.value )

    const formControls = { ...this.state.formControls }
    const control = { ...formControls[controlName] }

    control.value = event.target.value
    control.touched = true
    control.valid = this.validateControl(control.value, control.validation)

    formControls[controlName] = control
    this.setState({
      formControls
    })
  }

  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName]
      return (
        <Input
          key={controlName + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          shouldValidate={!!control.validation}
          errorMessage={control.errorMessage}
          onChange={event => this.onChangeHandler(event, controlName)}
        />
      )
    })
  }



  render() {
    return (
      <div className={classes.AuthForm}>
        <h1>Auth</h1>

        <form onSubmit={this.submitHandler}>
          {this.renderInputs()}

          <Button
            type='success'
            onClick={this.loginHandler}
          >
            Log In
          </Button>

          <Button
            type='primary'
            onClick={this.registerHandler}
          >
            Sing In
          </Button>
        </form>

      </div>
    );
  }
}

export default Auth;