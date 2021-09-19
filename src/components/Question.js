import { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Question extends Component{
  
  render(){
    const { name, avatarURL, showingText, id, type} = this.props
    
    return(
      <div>
        <div className='question'>
          <div className='question-author-name'>
            <h3>{name}</h3>
          </div>
          <div className='question-data'>
            <div className='question-author-avatar'>
              <img src={avatarURL} alt='question author avatar' />
            </div>
            <div className='question-text-data'>
              <h4>Would you rather</h4>
              <p>{showingText}</p>
              <Link  
                to={{
                  pathname: `questions/${id}`,
                }}
              ><div className='btn'>View Poll</div></Link>
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