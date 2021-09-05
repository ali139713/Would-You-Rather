import React, { Component } from "react";
import { connect } from "react-redux";

class Leaderboard extends Component {
  render() {
    const { userData } = this.props;
    return (
      userData &&
      userData.map((user) => (
        <div key={user.id}>
          <div
            className="card"
            style={{ width: "12rem", boxShadow: "2px 2px 2px  grey" }}
          >
            <img
              className="card-img-top"
              style={{ height: "80px", width: "100px" }}
              src={user.avatarURL}
              alt="User avatar"
            />
            <h6 style={{textAlign:"justify"}}> {user.name}</h6>
            <div className="card-body">
              <hr />
              <span className="text-danger ml-1">Answered:</span>
              <p className="card-text">{user.totalAnswers}</p>
              <hr />
              <span className="text-danger ml-1">Questions Asked:</span>
              <p className="card-text">{user.totalQuestions}</p>
              <hr />
              <span className="text-success ml-1">Total Score:</span>
              <span className="text-info ml-2"> {user.total} </span>
            </div>
          </div>
        </div>
      ))
    );
  }
}
const mapStateToProps = ({ users }) => {
  const userData = Object.values(users)
    .map((user) => ({
      id: user.id,
      name: user.name,
      avatarURL: user.avatarURL,
      totalAnswers: Object.values(user.answers).length,
      totalQuestions: user.questions.length,
      total: Object.values(user.answers).length + user.questions.length,
    }))
    .sort((a, b) => b.total - a.total)
  return {
    userData,
  };
};

export default connect(mapStateToProps)(Leaderboard);
