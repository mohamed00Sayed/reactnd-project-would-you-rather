import { Component } from 'react'
import { connect } from 'react-redux'

class AnsweredPoll extends Component{

  render(){
    const { name, avatarURL, text1, text2, vote, optOnePercent, optTwoPercent, optOneVotes, optTwoVotes } = this.props
    return(
      <div className='answered-poll'>
        <div className='asked-by'>
          Asked by {name}
        </div>
        <div className='answered-poll-content'>
          <div className='poll-author-avatar'>
            <img src={avatarURL} alt='question author avatar'/>
          </div>
          <div className='poll-option-results'>
            <h3>Results:</h3>
            <div className='poll-first-option'>
              <h4>Would you rather {text1}?</h4>
              <div className='option-percent' style={{width: `${optOnePercent}%`}}>{optOnePercent}% </div>
              <p>{optOneVotes} of {optOneVotes + optTwoVotes} votes</p>
              {
                vote === 'first'? (<div className='your-vote'>Your Vote</div>):(<p></p>)
              }
            </div>
            <div className='poll-second-option'>
              <h4>Would you rather {text2}?</h4>
              <div className='option-percent' style={{width: `${optTwoPercent}%`}}>{optTwoPercent}% </div>
              <p>{optTwoVotes} of {optOneVotes + optTwoVotes} votes</p>
              {
                vote === 'second'? (<div className='your-vote'>Your <br /> Vote</div>):(<p></p>)
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, props){
  const { id } = props
  const { users, questions } = state
  const { author, optionOne, optionTwo } = questions[id]
  const { name, avatarURL } = users[author]
  const text1 = optionOne.text
  const text2 = optionTwo.text
  const optOneVotes = optionOne.votes.length
  const optTwoVotes = optionTwo.votes.length
  const optOnePercent = getPercent(optOneVotes, optTwoVotes)
  const optTwoPercent = 100 - optOnePercent
  const vote = optionOne.votes.includes[author]? 'first': 'second'
  return {
    name,
    avatarURL,
    text1,
    text2,
    vote,
    optOneVotes,
    optTwoVotes,
    optOnePercent,
    optTwoPercent
  }
}

function getPercent(data1, data2){
  let percent
  const total = data1 + data2
  if(data2 === 0){
    percent = 1
  }
  else{
    percent = data1/total
  }
  
  return percent * 100
}


export default connect(mapStateToProps)(AnsweredPoll)