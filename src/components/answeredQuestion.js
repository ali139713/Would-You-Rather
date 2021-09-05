import React, { Component } from "react";
import { connect } from "react-redux";
import ProgressBar from "../components/progressBar";
import Notfound from "./notfound";

class AnsweredQuestion extends Component {
  render() {
    const question = this.props.questions
      ? this.props.questions[this.props.match.params.id]
      : null;
      if(question === null) {
        <Notfound />
      }
    //     if (question===undefined)
    //     {
    //      return <Redirect to='/notfound' />
    //    }
    const author = question ? this.props.users[question.author] : null;
    const totalVotes =
      question.optionOne.votes.length + question.optionTwo.votes.length;
    const percentOne = Math.round(
      (question.optionOne.votes.length / totalVotes) * 100
    );
    const percentTwo = Math.round(
      (question.optionTwo.votes.length / totalVotes) * 100
    );
    const authedUser = this.props.authedUser;

    return (
      <div>
        <div className="container-fluid">
          <div className="parentContainer">
            <div className="header">
              <h5>Question Info!!!</h5>
            </div>
            <div className="imageContainer">
              <img
                style={{
                  width: "8em",
                  marginLeft: "-10px",
                  marginBottom: "10px",
                }}
                src={author.avatarURL}
                alt=""
              />

              <h3>{author.name}</h3>
            </div>
            <div className="progressBarContainer">
              <p>{question.optionOne.text}</p>
              {question.optionOne.votes.includes(authedUser) ? (
                <span className="text-danger ml-2">Selected Choice</span>
              ) : null}
              <ProgressBar percent={percentOne} />
              <p>
                Votes: {question.optionTwo.votes.length} , {percentTwo}%
              </p>
              {/* <br /> */}
              <p>{question.optionTwo.text}</p>
              {question.optionTwo.votes.includes(authedUser) ? (
                <span className="text-danger ml-2">Your choice</span>
              ) : null}
              <ProgressBar percent={percentTwo} />
              <p>
                Votes: {question.optionTwo.votes.length} , {percentTwo}%
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  return {
    questions,
    users,
    authedUser,
  };
}

export default connect(mapStateToProps)(AnsweredQuestion);
