import React, { Component } from "react";

class Tabs extends Component {
  state = {
    currentButton: "btn1",
  };
  handleClick = () => {
    this.props.handleQuestion(true);
    this.setState({ currentButton: "btn1" });
  };
  handleClick2 = () => {
    this.props.handleQuestion(false);
    this.setState({ currentButton: "btn2" });
  };

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="parentTabs">
            <div className="tab1">
              <button
                id="btn1"
                className={
                  this.state.currentButton === "btn1" ? "activeBtn" : ""
                }
                onClick={this.handleClick}
              >
                {" "}
                Unanswered{" "}
              </button>
            </div>
            <div className="tab2">
              <button
                id="btn2"
                className={
                  this.state.currentButton === "btn2" ? "activeBtn" : ""
                }
                onClick={this.handleClick2}
              >
                {" "}
                Answered{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tabs;
