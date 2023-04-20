import Question from "./Question";

function QuestionList(props) {
  const { questions, type } = props;
  return (
    <ul className="list-group">
      {questions.map((id) => (
        <li key={id} className="list-group-item mb-3 mt-2">
          <Question id={id} type={type} />
        </li>
      ))}
    </ul>
  );
}

export default QuestionList;
