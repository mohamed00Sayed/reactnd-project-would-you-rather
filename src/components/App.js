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
import LoadingBar from 'react-redux-loading'
import { setAuthedUser } from '../actions/authedUser'
import history from '../history'

class App extends Component {


  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  
  handleLogout = (evt)=>{
    this.props.dispatch(setAuthedUser(null))
  }
  
  render() {
    return (
      <Router history={history}>
        <Fragment>
          <LoadingBar />
          <div className='app-container'>
            {this.props.loading === true
              ? null
              :
              (
                <Fragment>
                  <Nav handleLogout={this.handleLogout}/>
                  <div className='app-div'>
                    <Route exact path='/' component={QuestionBoard} />
                    <Route path='/leaderboard' component={LeaderBoard} />
                    <Route path='/add' component={NewQuestion} />
                    <Route exact path='/questions/:id/answered' render={(history)=>{
                      const id = history.match.params.id
                      return <AnsweredPoll id={id} />
                    }}/>
                    <Route exact path='/questions/:id/unanswered' render={(history)=>{
                      const id = history.match.params.id
                      return <UnansweredPoll id={id} />
                    }}/>
                  </div>
                </Fragment>
              )         
            }
          </div>
        </Fragment>
      </Router>
      
    )
  }
}
function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}
export default connect(mapStateToProps)(App);
