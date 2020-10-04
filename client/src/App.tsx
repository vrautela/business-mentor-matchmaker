import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import Navbar from "./components/navbar/Navbar";
import Login from "./components/sign-in/SignIn";
import Main from "./components/Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          {/* <Navbar /> */}
          <Switch>
            {/* <Main /> */}
            <Route exact path="/" component={Homepage}></Route>
            <Route exact path="/login" component={Login} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
