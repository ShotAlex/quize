import React, {Component} from 'react'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import classes from './Quiz.module.css'

class Quiz extends Component {
  state = {
    quiz : [
      {
        answers: [
          {text: 'Question 1'},
          {text: 'Question 2'},
          {text: 'Question 3'},
          {text: 'Question 4'}
        ]
      }
    ]
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <h1>Quiz</h1>
        <ActiveQuiz answers={this.state.quiz[0].answers} />
      </div>
    );
  }
}

export default Quiz;