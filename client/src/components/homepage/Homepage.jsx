import React from "react";
import Logo from "./BMM_Logo.png";
import Register from "./register.svg";
import Match from "./match.svg";
import Pick from "./pick.svg";
import Navbar from "../navbar/Navbar.jsx";

import { makeStyles } from "@material-ui/core";
import homepageStyleSheet from "./homepageStyles";
document.body.style.margin = "0";

const useStyles = makeStyles(homepageStyleSheet);

function Homepage() {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <Navbar />
      <div className={classes.description}>
        <div>
          {" "}
          <h1> Business Mentor Matchmaker</h1>
          <p>
            is here to help startups by matching them with mentors that they
            need specific help in.
            <br></br>
            Whether it be in finance, inventory, or just questions in the
            industry.
          </p>
        </div>

        <img src={Logo} alt="Logo" />
      </div>
      <div className={classes.info}>
        <h1> How it Works</h1>
        <p>Register your Business</p>
        <div className={classes.business}>
          <div className={classes.instructions}>
            {" "}
            <div>
              {" "}
              <img src={Register} alt="Register" />
              <p>Create your business profile.</p>
            </div>
            <div>
              {" "}
              <img src={Match} alt="Match" />
              <p>We will match you to mentors that can help.</p>
            </div>
            <div>
              {" "}
              <img src={Pick} alt="Pick" />
              <p>Or you can pick your own mentor.</p>
            </div>
          </div>
        </div>

        <p>Register as a Mentor</p>
        <div className={classes.mentor}>
          <div className={classes.instructions}>
            {" "}
            <div>
              {" "}
              <img src={Register} alt="Register" />
              <p>Create your mentor profile. </p>
            </div>
            <div>
              {" "}
              <img src={Match} alt="Match" />
              <p>We will match you to businesses that need your help.</p>
            </div>
            <div>
              {" "}
              <img src={Pick} alt="Pick" />
              <p>Or you can pick the business to help.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
