import Question from './Question'

function QuestionList(props){
  const { questions, type } = props
  return(
    <div>
      <ul className='question-list-ul'>
        {questions.map((id)=> <li key={id}> <Question id={id} type={type}/> </li>)}
      </ul>
    </div> 
  )
}

export default QuestionList