export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function formatQuestion (question, author, optionOneText, optionTwoText) {
  const { optionOne, optionTwo } = question
  const optOneVotes = optionOne.votes !== null ? optionOne.votes: []
  const optTwoVotes = optionTwo.votes !== null ? optionTwo.votes: []
  return {
    id: question.id,
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: optOneVotes,
      text: optionOneText,
    },
    optionTwo: {
      votes: optTwoVotes,
      text: optionTwoText,
    }
  }
}