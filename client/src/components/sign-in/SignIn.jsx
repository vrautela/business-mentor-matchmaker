import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import signinStyleSheet from "./signinStyles";
document.body.style.background = "#3E978B";

const useStyles = makeStyles(signinStyleSheet);

function Signin() {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <div className={classes.box}>
        <div className={classes.title}>Sign In</div>
        <div className={classes.info}>
          <input placeholder="Email" type="text"></input>
          <input placeholder="Password" type="text"></input>
        </div>
        <div className={classes.register}>
          {" "}
          <button type="submit">Sign In</button>
        </div>
      </div>
    </div>
  );
}

export default Signin;
