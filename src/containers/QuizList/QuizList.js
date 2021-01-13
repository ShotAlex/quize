import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import classes from './QuizList.module.css'
import axios from "axios";
import Loader from "../../components/UI/Loader/Loader";

class QuizList extends Component {
  state = {
    quizes: [],
    loading: true
  }

  renderQuizList() {
    return this.state.quizes.map(quiz => {
      return (
        <li key={quiz.id}>
          <NavLink to={'/quiz/' + quiz.id}>
            {quiz.name}
          </NavLink>
        </li>
      )
    })
  }

  async componentDidMount() {
    try {
      const response = await axios.get('https://quiz-fa02f-default-rtdb.europe-west1.firebasedatabase.app/quizes.json')
      const quizes = []

      Object.keys(response.data).forEach((key, index) => {
        quizes.push({
          id: key,
          name: `Test ${index}`
        })
      })

      this.setState({
        quizes,
        loading: false
      })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div className={classes.QuizList}>
        <div>
          <h1>Quiz List</h1>
        </div>

        {
          this.state.loading
          ? <Loader />
          : <ul>
              {this.renderQuizList()}
            </ul>
        }
      </div>
    );
  }
}

export default QuizList;