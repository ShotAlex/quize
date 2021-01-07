import React, {Component} from 'react'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import classes from './Quiz.module.css'

class Quiz extends Component {
  state = {
    activeQuestion : 0,
    answerState : null,
    quiz : [
      {
        id: 1,
        question: 'True language',
        rightAnswerId: 2,
        answers: [
          {id: 1, text: 'HTML'},
          {id: 2, text: 'CSS'},
          {id: 3, text: 'JS'},
          {id: 4, text: 'React'}
        ]
      },    {
        id: 2,
        question: 'True language',
        rightAnswerId: 3,
        answers: [
          {id: 2, text: 'CSS'},
          {id: 1, text: 'HTML'},
          {id: 4, text: 'React'},
          {id: 3, text: 'JS'}
        ]
      },    {
        id: 3,
        question: 'True language',
        rightAnswerId: 2,
        answers: [
          {id: 4, text: 'React'},
          {id: 2, text: 'CSS'},
          {id: 1, text: 'HTML'},
          {id: 3, text: 'JS'}
        ]
      },
    ]
  }

  onAnswerClickHandler = (answerId) => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0]
      if (this.state.answerState[key] === 'success') return
    }

    const question = this .state.quiz[this.state.activeQuestion]

    if (question.rightAnswerId === answerId) {
      this.setState({
        answerState : {[answerId] : 'success'}
      })

      const timeout = window.setTimeout(() => {
        if(this.isQuizFinished()) {
          console.log('Finish')
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }

        window.clearTimeout(timeout)
      }, 1000)
    } else {
      this.setState({
        answerState : {[answerId] : 'error'}
      })
    }
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <h1>Quiz</h1>

        <ActiveQuiz
          answers={this.state.quiz[this.state.activeQuestion].answers}
          question={this.state.quiz[this.state.activeQuestion].question}
          onAnswerClick={this.onAnswerClickHandler}
          quizeLength={this.state.quiz.length}
          answerNumber={this.state.activeQuestion + 1}
          state={this.state.answerState}
        />
      </div>
    );
  }
}

export default Quiz;