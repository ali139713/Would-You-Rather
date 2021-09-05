import React, { Component } from "react";
import { connect } from "react-redux";
import Tabs from "./tabs";
import QuestionList from "./questionList";

class Dashboard extends Component {
  state = {
    isUnanswered: true,
  };

  setQuestion = (value) => {
    this.setState({ isUnanswered: value });
  };

  render() {
    const { questionData } = this.props;
    return (
      <div>
        <Tabs handleQuestion={this.setQuestion} />
        <QuestionList
          answered={questionData.answered}
          notAnswered={questionData.notAnswered}
          isUnanswered={this.state.isUnanswered}
        />
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  const answeredIds = Object.keys(users[authedUser].answers);
  const answered = Object.values(questions)
    .filter((question) => answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  const notAnswered = Object.values(questions)
    .filter((question) => !answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  return {
    questionData: {
      answered,
      notAnswered,
    },
  };
}

export default connect(mapStateToProps)(Dashboard);
