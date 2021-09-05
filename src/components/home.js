import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Dashboard from "./dashboard";
import Nav from "./nav";
import NotAnsweredQuestion from "./notAnsweredQuestion";
import AnsweredQuestion from "./answeredQuestion";
import AddQuestion from "./addQuestion";
import Leaderboard from "./leaderboard";
import Notfound from "./notfound";
import PrivateRoute from "./privateRoute";

class Home extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <PrivateRoute  path="/questions" component={Dashboard} />
            <PrivateRoute
              
              path="/questions/:id"
              component={NotAnsweredQuestion}
            />
            <PrivateRoute
              
              path="/questionAnswer/:id"
              component={AnsweredQuestion}
            />
            <PrivateRoute  path="/answer/:id" component={AnsweredQuestion} />
            <PrivateRoute  path="/add" component={AddQuestion} />
            <PrivateRoute  path="/leaderboard" component={Leaderboard} />
            {/* <Route component={Notfound} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Home;
