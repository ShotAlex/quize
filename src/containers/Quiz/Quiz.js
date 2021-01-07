import React, {Component} from 'react'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";
import classes from './Quiz.module.css'

class Quiz extends Component {
  state = {
    results: {},
    isFinished: false,
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

    const question = this.state.quiz[this.state.activeQuestion]
    const results = this.state.results

    if (question.rightAnswerId === answerId) {
      if(!results[question.id]) {
        results[question.id] = 'success'
      }
      this.setState({
        answerState : {[answerId] : 'success'},
        results
      })

      const timeout = window.setTimeout(() => {
        if(this.isQuizFinished()) {
          this.setState({
            isFinished: true
          })
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }

        window.clearTimeout(timeout)
      }, 100)
    } else {
      results[question.id] = 'error'
      this.setState({
        answerState : {[answerId] : 'error'},
        results
      })
    }
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  onRetryHandler = () => {
    this.setState({
      results: {},
      isFinished: false,
      activeQuestion : 0,
      answerState : null
    })
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <h1>Quiz</h1>

        {
          this.state.isFinished
          ? <FinishedQuiz
              results={this.state.results}
              quiz={this.state.quiz}
              onRetry={this.onRetryHandler}
            />
          : <ActiveQuiz
              answers={this.state.quiz[this.state.activeQuestion].answers}
              question={this.state.quiz[this.state.activeQuestion].question}
              onAnswerClick={this.onAnswerClickHandler}
              quizLength={this.state.quiz.length}
              answerNumber={this.state.activeQuestion + 1}
              state={this.state.answerState}
            />
        }
      </div>
    );
  }
}

export default Quiz;