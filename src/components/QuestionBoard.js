import { Component } from 'react'
import { connect } from 'react-redux'

const unansweredQs = 'unansweredQs'
const answeredQs = 'answeredQs'

class QuestionBoard extends Component{
  state={
    selectedQuestions: unansweredQs
  }
  
  handleToggleQuestions = (evt) => {
    const id = evt.target.id
    if(id === answeredQs){
      this.setState({selectedQuestions: answeredQs})
      evt.target.classList.add('active-option')
      evt.target.nextSibling.classList.remove('active-option')
    }
    else{
      this.setState({selectedQuestions: unansweredQs})
      evt.target.classList.add('active-option')
      evt.target.previousSibling.classList.remove('active-option')
    }
  }
  
  render(){
    return(
      <div className='board-container'>
        <div className='question-board'>
        
          <div className='question-board-header'>
            <div id='answeredQs' className='question-board-header-option' onClick={this.handleToggleQuestions}>Answered Questions</div>
            <div id='unansweredQs' className='question-board-header-option active-option' onClick={this.handleToggleQuestions}>Unanswered Questions</div>
          </div>
          
          <div className='selected-questions'>
            {this.state.selectedQuestions === 'unansweredQs'? (
              <div>
                <ul>
                  {this.props.unansweredQs.map((id)=> <li key={id}>{id}</li>)}
                </ul>
              </div>
            ): (
              <div>
                <ul>
                  {this.props.answeredQs.map((id)=> <li key={id}>{id}</li>)}
                </ul>
              </div>         
            )}
          </div>
      
        </div>      
      </div>

    )
  }
}

function mapStateToProps(state){
  const questions = state.questions
  const authedUser = state.authedUser
  const answeredQs = []
  const unansweredQs = []
  
  const questionIds = Object.keys(questions)
    .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    
  questionIds.forEach((id) => {
    if(questions[id].optionOne.votes.includes(authedUser) || questions[id].optionTwo.votes.includes(authedUser)){
      answeredQs.push(id)
    }
    else{
      unansweredQs.push(id)
    }
  })
    
  return {
    answeredQs,
    unansweredQs
  }
}

export default connect(mapStateToProps)(QuestionBoard)