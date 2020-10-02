import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MentorSignup from './mentor-signup/MentorSignup';
import RegisterBusiness from './register-business/RegisterBusiness';
import SignIn from './sign-in/SignIn';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/mentor-signup' component={MentorSignup}></Route>
      <Route exact path='/register-business' component={RegisterBusiness}></Route>
      <Route exact path='/sign-in' component={SignIn}></Route>
    </Switch>
  );
}

export default Main;
