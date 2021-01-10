import React, {Component} from 'react'
import Button from '../../components/UI/Button/Button'
import classes from './QuizCreator.module.css'

class QuizCreator extends Component {

  state = {
    quiz: [],
    formControls: {
      question: '',
      option1: '',
      option2: '',
      option3: '',
      option4: ''
    }
  }

  submitHandler = event => event.preventDefault()
  addQuestionHandler = () => {}
  createQuizHandler = () => {}

  render() {
    return (
      <div className={classes.QuizCreator}>
        <h1>QuizCreator</h1>

        <form onSubmit={this.submitHandler}>

          <input type="text"/>
          <hr/>
          <input type="text"/>
          <input type="text"/>
          <input type="text"/>
          <input type="text"/>
          <select/>
          <hr/>

          <Button type='primary' onClick={this.addQuestionHandler} > Add question </Button>
          <Button type='success' onClick={this.createQuizHandler} > Create quiz </Button>
        </form>
      </div>
    );
  }
}

export default QuizCreator;