import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import QuestionBoard from './QuestionBoard'
import AnsweredPoll from './AnsweredPoll'
import UnansweredPoll from './UnansweredPoll'
import LeaderBoard from './LeaderBoard'
import NewQuestion from './NewQuestion'
import history from '../history'

class App extends Component {
	
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router history={history}>

          {this.props.loading === true
              ? null
              :
              (
                <div>
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
              )         
          }
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
