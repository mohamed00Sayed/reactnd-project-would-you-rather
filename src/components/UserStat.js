import { Component } from 'react'
import { connect } from 'react-redux'

class UserStat extends Component{
  
  render(){
    const { name, avatarURL, questionsNum, answersNum, total } = this.props
    return(
      <div className='user-stat'>
        <div className='stat-avatar'>
          <img src={avatarURL} alt='user avatar' />
        </div>
        <div className='stat-details'>
          <h3>{name}</h3>
          <p>Answered questions :  {' '} {answersNum}</p>
          <hr />
          <p>Created questions  :  {' '} {questionsNum}</p>
        </div>
        <div className='stat-score'>
          <div className='stat-header'>Score</div>
          <div className='stat-value'>
            <p className='total-score-value'>{total}</p>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, { id, stat }){
  const user = state.users[id]
  const { name, avatarURL } = user
  const { total, questionsNum, answersNum } = stat

  return {
    id,
    name,
    avatarURL,
    questionsNum,
    answersNum,
    total
  }
}

export default connect(mapStateToProps)(UserStat)