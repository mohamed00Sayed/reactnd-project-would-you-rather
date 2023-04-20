import { Component } from "react";
import { connect } from "react-redux";

class UserStat extends Component {
  render() {
    const { name, avatarURL, questionsNum, answersNum, total } = this.props;
    return (
      <div className="container-fluid d-flex">
        <div className="mx-auto my-auto">
          <img src={avatarURL} alt="user avatar" />
        </div>
        <div className="pe-5 ps-5 mx-auto border-end border-start">
          <h3>{name}</h3>
          <p>Answered questions : {answersNum}</p>
          <hr />
          <p>Created questions : {questionsNum}</p>
        </div>
        <div className="mx-auto bg-light rounded text-center my-auto">
          <div>Score</div>
          <div className="badge bg-primary">{total}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, { id, stat }) {
  const user = state.users[id];
  const { name, avatarURL } = user;
  const { total, questionsNum, answersNum } = stat;

  return {
    id,
    name,
    avatarURL,
    questionsNum,
    answersNum,
    total,
  };
}

export default connect(mapStateToProps)(UserStat);
