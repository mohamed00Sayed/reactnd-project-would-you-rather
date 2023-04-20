import { Component } from "react";
import { connect } from "react-redux";
import StatList from "./StatList";

class LeaderBoard extends Component {
  render() {
    const { sortedUsers } = this.props;
    return (
      <div className="container-fluid" style={{ marginTop: "100px" }}>
        <StatList leadersList={sortedUsers} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { users } = state;
  const valuesByUsers = [];

  Object.keys(users).forEach((userId) => {
    const user = users[userId];
    const questionsNum = user.questions.length;
    const answersNum = Object.keys(user.answers).length;
    const total = questionsNum + answersNum;
    valuesByUsers.push({
      id: user.id,
      stat: {
        total,
        questionsNum,
        answersNum,
      },
    });
  });

  const sortedUsers = valuesByUsers.sort((a, b) => b.stat.total - a.stat.total);

  return {
    sortedUsers,
  };
}

export default connect(mapStateToProps)(LeaderBoard);
