import React from 'react';
import classes from './ActiveQuiz.module.css'
import AnswersList from './AnswersList/AnswersList'

const ActiveQuiz = props => {
  return (
    <div className={classes.ActiveQuiz}>
      <p>
        <span>3.</span>
        How are U ?
      </p>

      <AnswersList answers={props.answers} />
    </div>
  );
};

export default ActiveQuiz;