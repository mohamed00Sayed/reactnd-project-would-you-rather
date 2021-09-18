import { Component } from 'react'
import { connect } from 'react-redux'

class UnansweredPoll extends Component{
  render(){
    return(
      <div>
        Unanswered Poll
      </div>
    )
  }
}

export default connect()(UnansweredPoll)