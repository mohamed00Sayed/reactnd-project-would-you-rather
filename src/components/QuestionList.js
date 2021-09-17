import Question from './Question'

function QuestionList(props){
  const questions = props.questions
  return(
    <div>
      <ul>
        {questions.map((id)=> <li key={id}> <Question id={id}/> </li>)}
      </ul>
    </div> 
  )
}

export default QuestionList