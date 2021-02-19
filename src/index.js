import "assets/scss/material-kit-react.scss?v=1.9.0";
import { createBrowserHistory } from "history";
import React from "react";
import ReactDOM from "react-dom";
import { Route, Router, Switch } from "react-router-dom";
import LandingPage from "views/LandingPage/LandingPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/profile-page" component={ProfilePage} />
      <Route exact path="/login-page" component={LoginPage} />
       {/* <Route path="/" component={Components} />  */}
    </Switch>
  </Router>,
  document.getElementById("root")
);
