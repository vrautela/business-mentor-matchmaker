import React from "react";
import { Switch, Route } from "react-router-dom";

import MentorSignup from "./mentor-signup/MentorSignup";
import RegisterBusiness from "./register-business/RegisterBusiness";
import SignIn from "./sign-in/SignIn";
import Homepage from "./homepage/Homepage";

const Main = () => {
  return (
    <Switch>
      /* Add Routes for Homepage, Business Dashboard, Mentor Dashboard, and
      Pairing */
      <Route exact path="/mentor-signup" component={MentorSignup}></Route>
      <Route
        exact
        path="/register-business"
        component={RegisterBusiness}
      ></Route>
      <Route exact path="/sign-in" component={SignIn}></Route>
      <Route exact path="/" component={Homepage}></Route>
    </Switch>
  );
};

export default Main;
