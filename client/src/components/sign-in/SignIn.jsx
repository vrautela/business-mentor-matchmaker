import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
import { makeStyles } from "@material-ui/core/styles";
import signinStyleSheet from "./signinStyles";
document.body.style.background = "#3E978B";

const useStyles = makeStyles(signinStyleSheet);

const Signin = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const classes = useStyles();

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting..");
    login(email, password);
  };

  // if(isAuthenticated) {
  //   return <Redirect to="/"
  // }
  return (
    <Fragment>
      <div className={classes.page}>
        <div className={classes.box}>
          <div className={classes.title}>Sign In</div>
          <div className={classes.info}>
            <input placeholder="Email" type="text"></input>
            <input placeholder="Password" type="text"></input>
          </div>
          <div className={classes.register}>
            {" "}
            <button type="submit" onClick={(e) => onSubmit(e)}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Signin.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Signin);
