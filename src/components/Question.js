import { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component{
  
  render(){
    return(
      <div>
        <div className='question'>
          <div className='question-author-name'>
            <h3>{this.props.name}</h3>
          </div>
          <div className='question-data'>
            <div className='question-author-avatar'>
              <img src={this.props.avatarURL} alt='question author avatar' />
            </div>
            <div className='question-text-data'>
              <h4>Would you rather</h4>
              <p>{this.props.showingText}</p>
              <button className='btn'>View Poll</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, {id}){
  const { author, optionOne } = state.questions[id]
  const { name, avatarURL } = state.users[author]
  const showingText = `...${optionOne.text.slice(0, 16)}...`
  return{
    id,
    name,
    avatarURL,
    showingText
  }
}

export default connect(mapStateToProps)(Question)