import { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { handleAnswerQuestion } from '../actions/questions'
import history from '../history'

class UnansweredPoll extends Component{
  state={
    selected: 'optionOne'
  }
  handleChange = (evt)=>{
    this.setState({selected: evt.target.value})
  }
  
  handleVoting = (evt)=> {
    const qid = this.props.id
    const user = this.props.authedUser
    this.props.dispatch(handleAnswerQuestion(qid, user, this.state.selected))
    history.replace('')
    
  }
  render(){
    const { id, name, avatarURL, optionOneText, optionTwoText} = this.props
    return(
      <div className='unanswered-poll'>
        <div className='user-asks'>
          {name} asks:
        </div>
        <div className='unanswered-poll-content'>
          <div className='unanswered-poll-author-avatar'>
            <img src={avatarURL} alt='question author avatar' />
          </div>
          <div className='poll-form-div'>
              <h2>Would you rather...</h2>
              <div>
                <input type='radio' id='first-radio' name='pollQ' value='optionOne' checked onChange={this.handleChange}/>
                <label htmlFor='first'>{optionOneText}</label>
              </div>
              <div>
                <input type='radio' id='second-radio' name='pollQ' value='optionTwo' onChange={this.handleChange}/>
                <label htmlFor='second'>{optionTwoText}</label>
              </div>
              <div className='link-div'>
                <Link onClick={this.handleVoting}
                  to={`answered`}
                ><div className='btn-unanswered'>Submit</div></Link>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, {id}){
  const { authedUser, users, questions } = state
  const { author, optionOne, optionTwo } = questions[id]
  const { name, avatarURL } = users[author]
  const optionOneText = optionOne.text
  const optionTwoText = optionTwo.text
  return {
    id,
    name,
    avatarURL,
    optionOneText,
    optionTwoText,
    authedUser
  }
}

export default connect(mapStateToProps)(UnansweredPoll)