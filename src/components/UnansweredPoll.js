import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { handleAnswerQuestion } from "../actions/questions";
import history from "../history";

class UnansweredPoll extends Component {
  state = {
    selected: "optionOne",
  };
  handleChange = (evt) => {
    this.setState({ selected: evt.target.value });
  };

  handleVoting = (evt) => {
    const qid = this.props.id;
    const user = this.props.authedUser;
    this.props.dispatch(handleAnswerQuestion(qid, user, this.state.selected));
    history.replace("");
  };
  render() {
    const { id, name, avatarURL, optionOneText, optionTwoText } = this.props;
    return (
      <div className="container-fluid border col-12 col-md-8 border-primary p-2 rounded-3" style={{ marginTop: "100px" }}>
        <h4 className="lead mb-3">{name} asks:</h4>
        <div className="d-flex">
          <div className="pe-3 my-auto">
            <img src={avatarURL} alt="question author avatar" />
          </div>
          <div className="border-start border-3 ps-3 pb-3">
            <h2>Would you rather...</h2>
            <div className="form-check form-switch mb-2">
              <input
                type="radio"
                id="first-radio"
                name="pollQ"
                value="optionOne"
                defaultChecked
                onClick={this.handleChange}
                className="form-check-input"
              />
              <label htmlFor="first">{optionOneText}</label>
            </div>
            <div className="form-check form-switch mb-3">
              <input
                type="radio"
                id="second-radio"
                name="pollQ"
                value="optionTwo"
                onClick={this.handleChange}
                className="form-check-input"
              />
              <label htmlFor="second">{optionTwoText}</label>
            </div>
            <div>
              <Link
                onClick={this.handleVoting}
                to={`${id}`}
                className="btn btn-outline-success"
              >
                Submit
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, { id }) {
  const { authedUser, users, questions } = state;
  const { author, optionOne, optionTwo } = questions[id];
  const { name, avatarURL } = users[author];
  const optionOneText = optionOne.text;
  const optionTwoText = optionTwo.text;
  return {
    id,
    name,
    avatarURL,
    optionOneText,
    optionTwoText,
    authedUser,
  };
}

export default connect(mapStateToProps)(UnansweredPoll);
