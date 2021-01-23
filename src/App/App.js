import React from "react";
import Layout from "../HOC/Layout/Layout";
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import Auth from "../containers/Auth/Auth";
import Quiz from "../containers/Quiz/Quiz";
import QuizCreator from "../containers/QuizCreator/QuizCreator";
import QuizList from "../containers/QuizList/QuizList";
import {connect} from 'react-redux'
import Logout from '../components/Logout/Logout'

class App extends React.Component{

  render() {
    let routes = (
      <Switch>
        <Route path='/auth' component={Auth} />
        <Route path='/quiz/:id' component={Quiz} />
        <Route path='/' component={QuizList} />
        <Redirect to='/' />
      </Switch>
    )

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path='/quiz-creator' component={QuizCreator} />
          <Route path='/quiz/:id' component={Quiz} />
          <Route path='/logout' component={Logout} />
          <Route path='/' component={QuizList} />
          <Redirect to='/' />
        </Switch>
      )
    }

    return (
      <Layout>
        {routes}
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token
  }
}

export default withRouter(connect(mapStateToProps)(App))
