import React from "react";
import App from "./App";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./services/auth";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} /> 
      <Route exact path="/signup" component={SignUp} />
      <PrivateRoute path="/app" component={App} />
      <Route path="*" component={() => <h1>Page Not Found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
