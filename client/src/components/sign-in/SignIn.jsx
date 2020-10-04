import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
import { makeStyles } from "@material-ui/core/styles";
import signinStyleSheet from "./signinStyles";
document.body.style.background = "#3E978B";

const useStyles = makeStyles(signinStyleSheet);

const Signin = ({ login, isAuthenticated, business, mentor }) => {
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

  if (isAuthenticated && business) {
    return <Redirect to="/businessprofile" />;
  } else if (isAuthenticated && mentor) {
    return <Redirect to="/mentorprofile" />;
  }
  return (
    <Fragment>
      <div className={classes.page}>
        <div className={classes.box}>
          <div className={classes.title}>Sign In</div>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className={classes.info}>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={email}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => onChange(e)}
                  minLength="6"
                />
              </div>
            </div>
            <div className={classes.register}>
              {" "}
              <button type="submit" onClick={(e) => onSubmit(e)}>
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

Signin.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  business: PropTypes.bool,
  mentor: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  business: state.auth.business,
  mentor: state.auth.mentor,
});

export default connect(mapStateToProps, { login })(Signin);
