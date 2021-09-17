import Question from './Question'

function QuestionList(props){
  const { questions, type } = props
  return(
    <div>
      <ul>
        {questions.map((id)=> <li key={id}> <Question id={id} type={type}/> </li>)}
      </ul>
    </div> 
  )
}

export default QuestionList