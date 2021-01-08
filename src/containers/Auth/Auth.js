import React, {Component} from 'react'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'
import classes from './Auth.module.css'

class Auth extends Component {
  loginHandler = () => {}
  registerHandler = () => {}
  submitHandler = event => event.preventDefault()



  render() {
    return (
      <div className={classes.AuthForm}>
        <h1>Auth</h1>

        <form onSubmit={this.submitHandler}>
          <Input
            label='Email'
          />
          <Input
            label='Password'
            errorMessage={'ere'}
          />

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