import React, {Component} from 'react'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import classes from './Quiz.module.css'

class Quiz extends Component {
  state = {
    quiz : [
      {
        question: 'True language',
        rightAnswerId: 2,
        answers: [
          {id: 1, text: 'HTML'},
          {id: 2, text: 'CSS'},
          {id: 3, text: 'JS'},
          {id: 4, text: 'React'}
        ]
      }
    ]
  }

  onAnswerClickHandler = (answerId) => {
    console.log(answerId)
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <h1>Quiz</h1>

        <ActiveQuiz
          answers={this.state.quiz[0].answers}
          question={this.state.quiz[0].question}
          onAnswerClick={this.onAnswerClickHandler}
          // rightAnswerId={this.state.quiz[0].rightAnswerId}
        />
      </div>
    );
  }
}

export default Quiz;