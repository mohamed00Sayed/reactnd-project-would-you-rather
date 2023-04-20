import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { handleAddQuestion } from "../actions/questions";
import history from "../history";

class NewQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optOne: "",
      optTwo: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddQuestion = this.handleAddQuestion.bind(this);
  }

  handleChange = (evt) => {
    const inputId = evt.target.id;
    if (inputId === "optOne") {
      this.setState({ optOne: evt.target.value });
    } else {
      this.setState({ optTwo: evt.target.value });
    }
  };

  handleAddQuestion = (evt) => {
    //evt.preventDefault()
    if (this.state.optOne === "" || this.state.optTwo === "") {
      alert("Please fill empty fields !");
    } else {
      const optionOneText = this.state.optOne;
      const optionTwoText = this.state.optTwo;
      const author = this.props.authedUser;
      const question = {
        optionOneText,
        optionTwoText,
        author,
      };
      this.props.dispatch(handleAddQuestion(question));
      history.replace("/");
    }
  };

  render() {
    return (
      <div
        className="container-fluid border text-center"
        style={{ marginTop: "100px" }}
      >
        <div className="display-6 mb-3 bg-primary text-white">
          Create New Question
        </div>
        <div className="">
          <p className="lead">Complete the question:</p>
          <h3>Would you rather...</h3>
          <div className="form-floating">
            <input
              className="form-control"
              id="optOne"
              placeholder={"Enter Option One Text Here"}
              onChange={this.handleChange}
            />
            <label for="optOne">Option one</label>
          </div>
          <hr />
          <div className="form-floating mb-3">
            <input
              className="form-control"
              id="optTwo"
              placeholder={"Enter Option Two Text Here"}
              onChange={this.handleChange}
            />
            <label for="optTwo">Option two</label>
          </div>
          <div>
            <Link to={"/"} onClick={this.handleAddQuestion} className="btn btn-lg btn-outline-primary w-100">
              SUBMIT
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { authedUser } = state;
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(NewQuestion);
