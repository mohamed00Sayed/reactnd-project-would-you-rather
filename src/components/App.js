import React, { Component } from 'react'
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
  
  handleSideBar = (evt)=>{
    const header = document.querySelector('.header')
    const container = document.querySelector('.container')
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      if(header.classList.contains('shown')){
        header.style.display = 'none'
        container.style.top= '6.3%'
      }
      else{
        header.style.display = 'block'
        container.style.top= '233px'
      }
      header.classList.toggle('shown')
    }

  }
  
  render() {
    const { loading, answers, questions } = this.props
    return (
      <Router history={history} basename='reactnd-project-would-you-rather'>
        <>
          <LoadingBar />
          {
            loading === true ?
            <Login handleLogin={this.handleLogin}/>:
            <>
              <div className='header-toggle' onClick={this.handleSideBar}>
                <svg viewBox="0 0 33 32"><path d="M24 21a1 1 0 010 2H8a1 1 0 010-2h16zm0-6a1 1 0 010 2H8a1 1 0 010-2h16zm0-6a1 1 0 010 2H8a1 1 0 010-2h16z"></path></svg>
              </div>
              <div className='header'>
                <Nav handleLogout={this.handleLogout} handleSideBar={this.handleSideBar}/>
              </div>
              
              <div className='container'>
                <Route exact path='/' component={QuestionBoard} />
                <Route path='/leaderboard' component={LeaderBoard} />
                <Route path='/add' component={NewQuestion} />
                <Route exact path='/questions/:id' render={(history)=>{
                  const id = history.match.params.id
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
            </>
          }
          
        </>
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
