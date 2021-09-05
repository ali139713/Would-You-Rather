import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect , withRouter } from "react-router-dom";
import { handleAddAnswer } from "../actions/questions";

class NotAnsweredQuestion extends Component {
  state = {
    question: "",
  };

  handleAnswer = () => {
    const { dispatch } = this.props;
    if (this.state.question === "") {
      alert("Please select a option");
    } else {
      const qid = this.props.match.params.id;
      const answer = this.state.question;
      this.props.history.push(`/questionAnswer/${qid}`);
      dispatch(handleAddAnswer(qid, answer));
    
    }
  };
  handleQuestion = (e) => {
    this.setState({ question: e.target.name });
  };

  render() {
    const question = this.props.questions
      ? this.props.questions[this.props.match.params.id]
      : null;
    if (question === undefined) {
      return <Redirect to="/notfound" />;
    }
    const author = question ? this.props.users[question.author] : null;

    return (
      <div>
        <div className="container-fluid">
          <div className="parentContainer">
            <div className="header">
              <h5> Would You Rather?</h5>
            </div>
            <div className="imageContainer">
              <img
                style={{
                  width: "8em",
                  marginLeft: "-10px",
                  marginBottom: "10px",
                }}
                alt="User avatar"
                src={author.avatarURL}
              />

              <h3>{author.name}</h3>
            </div>
            <div className="questionContainer">
              <input
                type="radio"
                id="optionOne"
                name="optionOne"
                value="optionOne"
                onChange={this.handleQuestion}
              />
              <label htmlFor="question1">{question.optionOne.text}</label>
              <input
                type="radio"
                id="optionTwo"
                name="optionTwo"
                value="optionTwo"
                onChange={this.handleQuestion}
              />
              <label htmlFor="question2">{question.optionTwo.text}</label>
              <br />
              <button onClick={this.handleAnswer}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users }) {
  return {
    questions,
    users,
  };
}

export default withRouter(connect(mapStateToProps)(NotAnsweredQuestion));
