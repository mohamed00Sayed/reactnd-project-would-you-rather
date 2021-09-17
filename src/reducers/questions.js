import { RECEIVE_QUESTIONS, ADD_QUESTION, ANSWER_QUESTION } from '../actions/questions'

export default function questions(state={}, action){
  switch(action.type){
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION:
      const { question } = action
      
      return {
        ...state,
        [question.id]: question
      }
    case ANSWER_QUESTION:
      const { questionId, authedUser, answer } = action
      const selected = answer === 'optionOne' ? 'optionOne': 'optionTwo'
      return {
        ...state,
        [questionId]: {
          ...state[questionId],
          [selected]: {
            votes: state[questionId][selected].votes.concat([authedUser])
          }
        }
      }
    default:
      return state
  }
}
