import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";

class AddQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSave = () => {
    const { optionOne, optionTwo } = this.state;
    const { dispatch } = this.props;
    if (optionOne && optionTwo !== "") {
      this.props.history.push("/questions")
      dispatch(handleAddQuestion(optionOne, optionTwo));
      this.setState({ optionOne: "", optionTwo: "" });
    } else {
      alert("Both fields are mandatory");
    }
  };
  render() {
    const value1 = this.state.optionOne;
    const value2 = this.state.optionTwo;

    return (
      <div>
        <div className="container-fluid">
          <div className="parentContainer">
            <div className="header">
              <h5> Would You Rather?</h5>
            </div>
            <div className="questionContainer">
              <input
                type="text"
                id="optionOne"
                name="optionOne"
                value={value1}
                onChange={this.handleChange}
              />
              <label htmlFor="question1">Please add option one</label>
              <input
                type="text"
                id="optionTwo"
                name="optionTwo"
                value={value2}
                onChange={this.handleChange}
              />
              <label htmlFor="question2">Please add option two</label>
              <br />
              <button onClick={this.handleSave}>Save</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(AddQuestion);
