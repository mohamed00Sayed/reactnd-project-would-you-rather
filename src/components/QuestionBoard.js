import { Component } from "react";
import { connect } from "react-redux";
import QuestionList from "./QuestionList";

const answered = "answered";
const unanswered = "unanswered";

class QuestionBoard extends Component {

  render() {
    const { answeredQs, unansweredQs } = this.props;
    return (
      <div className="container-fluid text-center bg-light" style={{marginTop:"100px"}}>
        <ul className="nav nav-tabs justify-content-center nav-justified">
          <li className="nav-item">
            <a className="nav-link active" data-bs-toggle="tab" href="#answered">
              Answered Questions
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#unanswered">
              Unanswered Questions
            </a>
          </li>
        </ul>

        <div className="tab-content">
          <div className="tab-pane active" id="answered">
            <QuestionList questions={answeredQs} type={answered} />
          </div>
          <div className="tab-pane" id="unanswered">
            <QuestionList questions={unansweredQs} type={unanswered} />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const questions = state.questions;
  const authedUser = state.authedUser;
  const answeredQs = [];
  const unansweredQs = [];

  const questionIds = Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );

  questionIds.forEach((id) => {
    if (
      questions[id].optionOne.votes.includes(authedUser) ||
      questions[id].optionTwo.votes.includes(authedUser)
    ) {
      answeredQs.push(id);
    } else {
      unansweredQs.push(id);
    }
  });

  return {
    answeredQs,
    unansweredQs,
  };
}

export default connect(mapStateToProps)(QuestionBoard);
