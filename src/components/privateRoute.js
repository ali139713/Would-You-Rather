import { connect } from "react-redux";
import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
 
    const {authedUser} = rest.authedUser;
    console.log(rest.authedUser)
    return (
      <Route {...rest} render={({ location }) => {
        return authedUser !== null
          ? children
          : <Redirect to={{
              pathname: '/questions',
              state: { from: location }
            }}
   />
      }} />
    )
  }
  
  function mapStateToProps ({authedUser}){
      return{
          authedUser
      }
  }
  export default connect(mapStateToProps)(PrivateRoute);
  