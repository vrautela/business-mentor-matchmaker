import React from "react";

import { makeStyles } from "@material-ui/core";
import homepageStyleSheet from "./homepageStyles";
document.body.style.margin = "0";

const useStyles = makeStyles(homepageStyleSheet);

function Homepage() {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <div className={classes.description}>
        <p>
          Business Mentor Matchmaker is here to help startups by matching them with mentors that
          they need specific help in. Whether it be in finance, inventory, or
          just questions in the industry.{" "}
        </p>
      </div>
      <div className={classes.info}>
        <h2> How it Works</h2>
        <div className={classes.business}>
          <p>Register your Business</p>
          <div className={classes.instructions}>
            {" "}
            <div>
              {" "}
              <p>Create your business profile.</p>
            </div>
            <div>
              {" "}
              <p>We will match you to mentors that can help.</p>
            </div>
            <div>
              {" "}
              <p>Or you can pick your own mentor.</p>
            </div>
          </div>
        </div>

        <div className={classes.mentor}>
          <p>Register as a Mentor</p>
          <div className={classes.instructions}>
            {" "}
            <div>
              {" "}
              <p>Create your mentor profile. </p>
            </div>
            <div>
              {" "}
              <p>We will match you to businesses that need your help.</p>
            </div>
            <div>
              {" "}
              <p>Or you can pick the business to help.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
