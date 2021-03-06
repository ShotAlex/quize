import React from 'react'
import {Link} from 'react-router-dom'
import Button from "../UI/Button/Button";
import classes from './FinishedQuiz.module.css'

const FinishedQuiz = props => {
  const successCount =
    Object
      .keys(props.results)
      .reduce((total, key) => {
        if (props.results[key] === 'success') total++
        return total
      }, 0)

  return (
    <div className={classes.FinishedQuiz}>
      <h2>Finished</h2>
      <p>True answers: {successCount} / {props.quiz.length}</p>
      <Button onClick={props.onRetry}>Repeat</Button>
      <Link to='/'>
        <Button onClick={props.onRetry}>Go to Quiz List</Button>
      </Link>

      <ul>
        {props.quiz.map((quizItem, index) => {
          const cls = classes[props.results[quizItem.id] === 'success' ? 'success' : 'error']
          return (
            <li key={index} className={classes.FinishedQuizItem}>
              {index + 1}.
              <span className={cls}>
                {quizItem.question}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default FinishedQuiz;