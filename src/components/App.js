import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import QuestionBoard from './QuestionBoard'

class App extends Component {
	
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        <QuestionBoard />
      </div>
    )
  }
}

export default connect()(App);
