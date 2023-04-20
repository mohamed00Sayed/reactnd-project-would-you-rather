import { Component } from "react";
import { connect } from "react-redux";

class AnsweredPoll extends Component {
  render() {
    const {
      name,
      avatarURL,
      text1,
      text2,
      vote,
      optOnePercent,
      optTwoPercent,
      optOneVotes,
      optTwoVotes,
    } = this.props;
    return (
      <div className="container-fluid border" style={{ marginTop: "100px" }}>
        <label className="mb-3 lead">Asked by {name}</label>
        <div className="d-flex">
          <div className="pe-3 my-auto">
            <img src={avatarURL} alt="question author avatar" />
          </div>
          <div className="border-start border-3 ps-3 pb-3">
            <p className="display-6">Results:</p>
            <div className="">
              <div className="d-flex mb-3">
                <h4>Would you rather {text1}?</h4>
                {vote === "first" ? (
                  <span className="float-end">
                    <svg
                      style={{ width: "50px", height: "50px", fill: "#007bff" }}
                      viewBox="0 0 33 32"
                    >
                      <path d="M17 7a1 1 0 01.117 1.993L17 9h-7v14h14v-7l.007-.117a1 1 0 01.876-.876L25 15a1 1 0 01.993.883L26 16v7a2 2 0 01-2 2H10a2 2 0 01-2-2V9a2 2 0 012-2h7zm8.555.168a1 1 0 01.277 1.387l-8 10a1 1 0 01-1.54.152l-3-3a1 1 0 011.415-1.414l2.138 2.137 7.323-8.985a1 1 0 011.387-.277z"></path>
                    </svg>
                  </span>
                ) : (
                  <p></p>
                )}
              </div>
              <div className="progress mb-1">
                <div
                  className="progress-bar"
                  style={{ width: `${optOnePercent}%` }}
                >
                  {optOnePercent}%{" "}
                </div>
              </div>
              <p>
                {optOneVotes} of {optOneVotes + optTwoVotes} votes
              </p>
            </div>
            <div className="">
              <div className="d-flex mb-3">
                <h4>Would you rather {text2}?</h4>
                {vote === "second" ? (
                  <span className="float-end">
                    <svg
                      style={{ width: "50px", height: "50px", fill: "#007bff" }}
                      viewBox="0 0 33 32"
                    >
                      <path d="M17 7a1 1 0 01.117 1.993L17 9h-7v14h14v-7l.007-.117a1 1 0 01.876-.876L25 15a1 1 0 01.993.883L26 16v7a2 2 0 01-2 2H10a2 2 0 01-2-2V9a2 2 0 012-2h7zm8.555.168a1 1 0 01.277 1.387l-8 10a1 1 0 01-1.54.152l-3-3a1 1 0 011.415-1.414l2.138 2.137 7.323-8.985a1 1 0 011.387-.277z"></path>
                    </svg>
                  </span>
                ) : (
                  <p></p>
                )}
              </div>
              <div className="progress mb-1">
                <div
                  className="progress-bar"
                  style={{ width: `${optTwoPercent}%` }}
                >
                  {optTwoPercent}%{" "}
                </div>
              </div>
              <p>
                {optTwoVotes} of {optOneVotes + optTwoVotes} votes
              </p>
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
  const text1 = optionOne.text;
  const text2 = optionTwo.text;
  const optOneVotes = optionOne.votes.length;
  const optTwoVotes = optionTwo.votes.length;
  const optOnePercent = getPercent(optOneVotes, optTwoVotes);
  const optTwoPercent = 100 - optOnePercent;
  let vote = "second";
  if (optionOne.votes.includes(authedUser)) {
    vote = "first";
  }

  return {
    name,
    avatarURL,
    text1,
    text2,
    vote,
    optOneVotes,
    optTwoVotes,
    optOnePercent,
    optTwoPercent,
  };
}

function getPercent(data1, data2) {
  let percent;
  const total = data1 + data2;
  if (data2 === 0) {
    percent = 1;
  } else {
    percent = data1 / total;
  }

  return Math.round(percent * 100);
}

export default connect(mapStateToProps)(AnsweredPoll);
