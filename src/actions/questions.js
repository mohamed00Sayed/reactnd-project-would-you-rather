import { saveQuestionAnswer, saveQuestion } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveQuestions(questions){
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function answerQuestion(questionId, authedUser, answer){
  return {
    type: ANSWER_QUESTION,
    questionId,
    authedUser,
    answer,
  }
}

export function handleAnswerQuestion(questionId, authedUser, answer){
  return (dispatch) => {
    return saveQuestionAnswer(authedUser, questionId, answer)
      .then(()=> {
        dispatch(answerQuestion(questionId, authedUser, answer))
        
      })
  }
}

export function addQuestion(question){
  return {
    type: ADD_QUESTION,
    question
  }
}

export function handleAddQuestion(question){
  return (dispatch)=> {
    return saveQuestion(question)
      .then((question)=> dispatch(addQuestion(question)))
  }
}