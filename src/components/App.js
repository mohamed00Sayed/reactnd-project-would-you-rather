import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import QuestionBoard from './QuestionBoard'
import AnsweredPoll from './AnsweredPoll'
import UnansweredPoll from './UnansweredPoll'
import LeaderBoard from './LeaderBoard'
import NewQuestion from './NewQuestion'
import Nav from './Nav'
import Login from './Login'
import ErrorPage from './ErrorPage'
import LoadingBar from 'react-redux-loading'
import { setAuthedUser } from '../actions/authedUser'
import history from '../history'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData(null))
  }

  
  handleLogout = (evt)=>{
    this.props.dispatch(setAuthedUser(null))
    history.replace('/')
  }
  
  handleLogin = (userId)=> {
    this.props.dispatch(setAuthedUser(userId))
  }
  
  render() {
    const { loading, answers, questions } = this.props
    return (
      <Router history={history} >
        <Fragment>
          <LoadingBar />
          {
            loading === true ?
            <Login handleLogin={this.handleLogin}/>:
            <Fragment>
              <Nav handleLogout={this.handleLogout}/>
              <div className='app-div'>
                <Route exact path='/' component={QuestionBoard} />
                <Route path='/leaderboard' component={LeaderBoard} />
                <Route path='/add' component={NewQuestion} />
                <Route exact path='/questions/:id' render={(history)=>{
                  const id = history.match.params.id
                  console.log('id is:', id, 'answers are:', Object.keys(answers))
                  if(Object.keys(answers).includes(id)){
                    return <AnsweredPoll id={id} />
                  }
                  else{
                    if(Object.keys(questions).includes(id)){
                      return <UnansweredPoll id={id} />
                    }
                    else{
                      return <ErrorPage />
                    }
                    
                  }
                }}/>
              </div>
            </Fragment>
          }
          
        </Fragment>
      </Router>
      
    )
  }
}
function mapStateToProps ({ authedUser, users, questions }) {
  const loading = authedUser === null 
  let answers
  if(authedUser !== null){
    answers = users[authedUser].answers
    
  }
  return {
    loading,
    answers,
    questions
  }
}
export default connect(mapStateToProps)(App);
