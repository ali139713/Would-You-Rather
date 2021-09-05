import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {clearAuthUser} from '../actions/authUser';

function Nav(props) {
  let { users, authedUser , dispatch } = props;
  let user = users[authedUser];

 const handleLogout = () =>{
    dispatch(clearAuthUser());
  }
  return (
    <nav className="navbar navbar-dark bg-dark justify-content-around">
    <Link to="/questions" className="navbar-brand">Home</Link>
    <Link to="/add" className="navbar-brand">Add Question</Link>
    <Link to="/leaderboard" className="navbar-brand">LeaderBoard</Link>
    <div to="" className="navbar-brand">
    <img src={user.avatarURL} width="30" height="30" className="d-inline-block align-top" alt="" />
   {user.name}
  </div>
  <div className="row">
  <button className="btn btn-secondary" style={{width:'100px',marginTop:"2px"}} onClick={handleLogout}>Logout</button>
  </div>
  </nav>
  );
}

function mapStateToProps({ users, authedUser }) {
  return {
    users,
    authedUser,
  };
}

export default connect(mapStateToProps)(Nav);
