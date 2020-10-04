import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import mentorSignupStyleSheet from "./mentorSignupStyles";
document.body.style.background = "#3E978B";

const useStyles = makeStyles(mentorSignupStyleSheet);

function MentorSignup() {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <div className={classes.box}>
        <div className={classes.title}>Mentor Sign Up</div>
        <div className={classes.info}>
          <input placeholder="Email" type="text"></input>
          <input placeholder="First Name" type="text"></input>
          <input placeholder="Password" type="text"></input>
        </div>
        <div className={classes.register}>
          {" "}
          <button type="submit">Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default MentorSignup;
