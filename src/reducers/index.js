import { combineReducers } from "redux";
import authedUser from "../reducers/authUser";
import questions from "../reducers/questions";
import users from "../reducers/users";

export default combineReducers({
  authedUser,
  questions,
  users,
});
