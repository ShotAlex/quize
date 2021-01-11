import React, {Component} from 'react'
import Button from '../../components/UI/Button/Button'
import {createControl} from '../../form/formFramework'
import Input from '../../components/UI/Input/Input'
import Auxiliary from '../../HOC/Auxiliary/Auxiliary'
import Select from '../../components/UI/Select/Select'
import classes from './QuizCreator.module.css'

function createOptionControl(num) {
  return createControl({
    label: `Variant ${num}`,
    errorMessage: 'Not empty answer',
    id: num
  }, {required: true})
}

function createFormControls() {
  return {
    question: createControl({
      label: 'Input Question!',
      errorMessage: 'Not empty question',
    }, {required: true}),
    option1: createOptionControl(1),
    option2: createOptionControl(3),
    option3: createOptionControl(3),
    option4: createOptionControl(4)
  }
}

class QuizCreator extends Component {
  state = {
    quiz: [],
    rightAnswerId: 1,
    formControls: createFormControls()
  }

  submitHandler = event => event.preventDefault()
  addQuestionHandler = () => {}
  createQuizHandler = () => {}
  changeHandler = (value, controlName) => {}
  selectChangeHandler = (event) => {
    this.setState({
      rightAnswerId: +event.target.value
    })
  }

  renderInputs = () => {
    return Object.keys(this.state.formControls).map( (controlName, index) => {
      const control = this.state.formControls[controlName]
      return (
        <Auxiliary key={controlName + index}>
          <Input
            label={control.label}
            value={control.value}
            valid={control.valid}
            shouldValidate={!!control.validation}
            touched={control.touched}
            errorMessage={control.errorMessage}
            onChange={event => this.changeHandler(event.target.value, controlName)}
          />
          {index === 0 ? <hr /> : null}
        </Auxiliary>
      )
    })
  }

  render() {
    const select = <Select
      label='Choose true answer'
      value={this.state.rightAnswerId}
      onChange={this.selectChangeHandler}
      options={[
        {text: 1, value: 1},
        {text: 2, value: 2},
        {text: 3, value: 3},
        {text: 4, value: 4},
      ]}
    />
    return (
      <div className={classes.QuizCreator}>
        <h1>QuizCreator</h1>

        <form onSubmit={this.submitHandler}>

          {this.renderInputs()}
          {select}



          <Button type='primary' onClick={this.addQuestionHandler} > Add question </Button>
          <Button type='success' onClick={this.createQuizHandler} > Create quiz </Button>
        </form>
      </div>
    );
  }
}

export default QuizCreator;