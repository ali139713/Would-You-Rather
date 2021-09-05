import React, { Component} from "react";
import { BrowserRouter as Router} from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import Login from "./login";
import Home from "./home";

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }
  render() {
    const { authedUser } = this.props;
    return (
      <Router>
        <div className="App">
          {authedUser === null ? (
            <Login />
          ) : (
            <>
              <Home />
            </>
          )}
        </div>
      </Router>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps, { handleInitialData })(App);
