import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthUser } from "../actions/authUser";
import { withRouter,Redirect } from "react-router-dom";


class Login extends Component {
  state = {
    username: "",
    isRefer:false
  };

  handleSubmit = (e) => {
    const { dispatch } = this.props;
    e.preventDefault();
    this.setState({isRefer:true})
    dispatch(setAuthUser(this.state.username));
    if (this.state.isRefer === true) {
      return <Redirect to={this.props.location.state?.from || '/questions'} />
    }
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  validate = () => {
    if (this.state.username !== "") {
      return false;
    } else {
      return true;
    }
  };

  render() {
    const { userNames } = this.props;
    console.log(this.props)

    return (
      <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">
            Welcome to Would You Rather App...
          </label>
          <select
            id="username"
            name="username"
            className="form-control"
            onChange={this.handleChange}
            value={this.state.username}
          >
            <option value="" disabled>
              Select user
            </option>
            {userNames.map((x) => (
              <option key={x.value}>{x.label}</option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="btn btn-primary mb-2"
          onClick={this.handleSubmit}
          disabled={this.validate()}
        >
          Login
        </button>
      </form>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    userNames: Object.keys(users).map((id) => ({
      value: id,
      label: users[id].name.toLowerCase().split(" ").join(""),
    })),
  };
}

export default withRouter(connect(mapStateToProps)(Login));
