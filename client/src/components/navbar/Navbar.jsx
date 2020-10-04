import React from "react";

import { makeStyles } from "@material-ui/core";
import navbarStyleSheet from "./navbarStyles";
document.body.style.margin = "0";

const useStyles = makeStyles(navbarStyleSheet);

function Homepage() {
  const classes = useStyles();

  return (
    <div className={classes.nav}>
      <h3>
        <a href="#home"> Business Mentor Matchmaker</a>
      </h3>
      <p>
        <a href="#business">Business</a>
      </p>
      <p>
        <a href="#mentors">Mentors</a>
      </p>
      <p>
        <a href="#profile">Profile</a>
      </p>
    </div>
  );
}

export default Homepage;
