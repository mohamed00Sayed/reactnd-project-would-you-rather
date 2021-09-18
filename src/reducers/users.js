import { RECEIVE_USERS } from '../actions/users'
import { ANSWER_QUESTION, ADD_QUESTION } from '../actions/questions'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
    case ANSWER_QUESTION:
      const { questionId, authedUser, answer } = action
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [questionId]: answer
          }
        }
      }
    case ADD_QUESTION:
      const { id, author } = action.question
      console.log('id:', id, 'author:', author, 'action.question:',action.question)
      return{
        ...state,
        [author]:{
          ...state[author],
          questions: state[author].questions.concat([id])
        }
      }
    default:
      return state
  }
} 