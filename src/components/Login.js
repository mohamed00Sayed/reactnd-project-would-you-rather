import { Component } from "react";
import { connect } from "react-redux";

class Login extends Component {
  state = {
    selected: "",
  };

  handleLogin = (evt) => {
    const userId = this.state.selected;
    if (userId === "") {
      alert("Please select a user !");
    } else {
      this.props.handleLogin(userId);
    }
  };

  handleSelectedUser = (evt) => {
    this.setState({ selected: evt.target.value });
  };

  render() {
    const { users } = this.props;
    return (
      <div className="row row-cols-3 vh-100 bg-light">
        <div className="bg-dark col-11 col-sm-9 col-md-8 col-lg-5 mx-auto my-auto rounded-3 text-center">
          <h3 className="display-3 text-white">Sign in</h3>
          <select
            className="form-select form-select-lg mt-3 w-75 mx-auto mb-4"
            onChange={this.handleSelectedUser}
            defaultValue={"default"}
          >
            <option disabled value={"default"}>
              Select a user...
            </option>
            {Object.keys(users).map((userId) => {
              const { id, name } = users[userId];
              return (
                <option key={id} value={id}>
                  {name}
                </option>
              );
            })}
          </select>
          <button
            className="btn btn-lg btn-success w-75 mb-4"
            onClick={this.handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { users } = state;
  return {
    users,
  };
}

export default connect(mapStateToProps)(Login);
