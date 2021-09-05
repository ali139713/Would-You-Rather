import React, { Component } from "react";
import { Link } from "react-router-dom";
class QuestionList extends Component {
  render() {
    const { isUnanswered, answered, notAnswered } = this.props;
    return (
      <div>
        {isUnanswered === true
          ? notAnswered &&
            notAnswered.map((x) => (
              <div className="card" key={x.id}>
                <div className="card-body">
                  <h5 className="card-title">{x.author}</h5>
                  <p className="card-text">{x.optionOne.text}</p>
                  <p className="card-text">{x.optionTwo.text}</p>
                  <Link to={`/questions/${x.id}`} className="btn btn-primary">
                    Answer Poll
                  </Link>
                </div>
              </div>
            ))
          : answered &&
            answered.map((x) => (
              <div className="card" key={x.id}>
                <div className="card-body">
                  <h5 className="card-title">{x.author}</h5>
                  <p className="card-text">{x.optionOne.text}</p>
                  <p className="card-text">{x.optionTwo.text}</p>
                  <Link to={`/answer/${x.id}`} className="btn btn-primary">
                    See Results
                  </Link>
                </div>
              </div>
            ))}
      </div>
    );
  }
}

export default QuestionList;
