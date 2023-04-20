import { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Question extends Component {
  render() {
    const { name, avatarURL, showingText, id } = this.props;

    return (
      <div>
        <label className="display-6 bg-primary w-100 rounded-0 py-3 text-white">
          {name}
        </label>
        <div className="mt-2">
          <img src={avatarURL} alt="" />
        </div>
        <div className="">
          <h4>Would you rather</h4>
          <p className="lead">{showingText}</p>
          <Link
            to={{
              pathname: `questions/${id}`,
            }}
            className="btn btn-outline-success w-100 rounded-0"
          >
            <div className="">View Poll</div>
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, { id }) {
  const { author, optionOne } = state.questions[id];
  const { name, avatarURL } = state.users[author];
  const showingText = `...${optionOne.text.slice(0, 16)}...`;
  return {
    id,
    name,
    avatarURL,
    showingText,
  };
}

export default connect(mapStateToProps)(Question);
