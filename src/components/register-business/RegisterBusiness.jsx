import React from "react";

import { makeStyles } from "@material-ui/core";
import registerBusinessStyleSheet from "./registerBusinessStyles";
document.body.style.background = "#3E978B";

const useStyles = makeStyles(registerBusinessStyleSheet);

function RegisterBusiness() {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <div className={classes.box}>
        <div className={classes.title}>Register your Business</div>
        <div className={classes.info}>
          <input placeholder="Business Name" type="text"></input>
          <input placeholder="Email" type="text"></input>
          <input placeholder="First Name" type="text"></input>
          <input placeholder="Password" type="text"></input>
        </div>
        <div className={classes.register}>
          {" "}
          <button type="submit">Register</button>
        </div>
      </div>
    </div>
  );
}

export default RegisterBusiness;
