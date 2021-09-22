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
                vote === 'first'? (<div className='user-choice' style={{'width':'30px', 'height':'30px','fill':'#017a9b'}}><svg viewBox="0 0 33 32"><path d="M17 7a1 1 0 01.117 1.993L17 9h-7v14h14v-7l.007-.117a1 1 0 01.876-.876L25 15a1 1 0 01.993.883L26 16v7a2 2 0 01-2 2H10a2 2 0 01-2-2V9a2 2 0 012-2h7zm8.555.168a1 1 0 01.277 1.387l-8 10a1 1 0 01-1.54.152l-3-3a1 1 0 011.415-1.414l2.138 2.137 7.323-8.985a1 1 0 011.387-.277z"></path></svg></div>):(<p></p>)
              }
            </div>
            <div className='poll-second-option'>
              <h4>Would you rather {text2}?</h4>
              <div className='option-percent' style={{width: `${optTwoPercent}%`}}>{optTwoPercent}% </div>
              <p>{optTwoVotes} of {optOneVotes + optTwoVotes} votes</p>
              {
                vote === 'second'? (<div className='user-choice' style={{'width': '30px', 'height':'30px', 'fill':'#017a9b'}}><svg viewBox="0 0 33 32"><path d="M17 7a1 1 0 01.117 1.993L17 9h-7v14h14v-7l.007-.117a1 1 0 01.876-.876L25 15a1 1 0 01.993.883L26 16v7a2 2 0 01-2 2H10a2 2 0 01-2-2V9a2 2 0 012-2h7zm8.555.168a1 1 0 01.277 1.387l-8 10a1 1 0 01-1.54.152l-3-3a1 1 0 011.415-1.414l2.138 2.137 7.323-8.985a1 1 0 011.387-.277z"></path></svg></div>):(<p></p>)
              }
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
  const text1 = optionOne.text
  const text2 = optionTwo.text
  const optOneVotes = optionOne.votes.length
  const optTwoVotes = optionTwo.votes.length
  const optOnePercent = getPercent(optOneVotes, optTwoVotes)
  const optTwoPercent = 100 - optOnePercent
  let vote = 'second'
  if(optionOne.votes.includes(authedUser)){
    vote = 'first'
  }
  
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
  
  return Math.round(percent * 100)
}


export default connect(mapStateToProps)(AnsweredPoll)