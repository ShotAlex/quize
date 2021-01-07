import React, {Component} from 'react'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import classes from './Quiz.module.css'

class Quiz extends Component {
  state = {
    quiz : [
      {
        question: 'True language',
        answers: [
          {id: 1, text: 'HTML'},
          {id: 2, text: 'CSS'},
          {id: 3, text: 'JS'},
          {id: 4, text: 'React'}
        ]
      }
    ]
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <h1>Quiz</h1>
        <ActiveQuiz
          answers={this.state.quiz[0].answers}
          question={this.state.quiz[0].question}
        />
      </div>
    );
  }
}

export default Quiz;