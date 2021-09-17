import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import QuestionBoard from './QuestionBoard'
import AnsweredPoll from './AnsweredPoll'

class App extends Component {
	
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>

          {this.props.loading === true
              ? null
              :
              (
                <div>
                  <Route exact path='/' component={QuestionBoard} />
                  <Route path='/questions/:id' render={(history)=>{
                    const { id } = history.match.params
                    if(history.location.state.type === 'answered_poll'){
                      return <AnsweredPoll id={id}/>
                    }
                    else{
                      return <div>Unanswered Poll</div>
                    }
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
