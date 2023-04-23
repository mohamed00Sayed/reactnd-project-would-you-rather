import { Component } from "react";
import { connect } from "react-redux";

class UserStat extends Component {
  render() {
    const { name, avatarURL, questionsNum, answersNum, total } = this.props;
    return (
      <div className="col-12 col-md-8 text-center mx-auto">
        <div className="">
          <img src={avatarURL} alt="user avatar" />
        </div>
        <div className="list-group-vertical border border-primary mt-3 mb-3 pt-2 p-2 rounded-3">
          <div className="lits-group-item mt-3 mb-3 pt-2 p-2 rounded-3">
            <h3>{name}</h3>
            <p>Answered questions : {answersNum}</p>
            <hr />
            <p>Created questions : {questionsNum}</p>
          </div>
          <div className="bg-light pb-3">
            <div>Score</div>
            <div className="badge bg-primary">{total}</div>
          </div>
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
