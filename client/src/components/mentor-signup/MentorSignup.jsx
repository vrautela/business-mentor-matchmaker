import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { register } from "../../actions/auth";
import mentorSignupStyleSheet from "./mentorSignupStyles";
import { setAlert } from "../../actions/alert";
import PropTypes from "prop-types";
document.body.style.background = "#3E978B";

const useStyles = makeStyles(mentorSignupStyleSheet);

const Register = ({ register, isAuthenticated }) => {
  const classes = useStyles();
  var [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    mentor: "",
    business: "",
  });

  var { name, email, password, password2, mentor, business } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    var userType = document.getElementsByName("userType");
    for (var i = 0; i < userType.length; i++) {
      if (userType[i].checked) {
        if (userType[i].value == "mentor") {
          mentor = true;
          business = false;
        } else {
          business = true;
          mentor = false;
        }
      }
    }
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger", 2000);
    } else if (mentor == business) {
      console.log("You can only be a business or mentor, not both!");
    } else {
      register({ name, email, password, mentor, business });
    }
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
          <div className={classes.title}>Sign Up</div>
          <div className={classes.info}>
            <form onSubmit={(e) => onSubmit(e)}>
              <input
                placeholder="Email"
                type="text"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
              ></input>
              <input
                placeholder="Name"
                type="text"
                name="name"
                value={name}
                onChange={(e) => onChange(e)}
              ></input>
              <input
                placeholder="Password"
                type="text"
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
              ></input>
              <input
                placeholder="Password Again"
                type="text"
                name="password2"
                value={password2}
                onChange={(e) => onChange(e)}
              ></input>
              <label>
                <input
                  type="radio"
                  name="userType"
                  value="mentor"
                  onChange={(e) => onChange(e)}
                />{" "}
                Mentor
              </label>
              <label>
                <input
                  type="radio"
                  name="userType"
                  value="business"
                  onChange={(e) => onChange(e)}
                />{" "}
                Business
              </label>
            </form>
          </div>
          <div className={classes.register}>
            {" "}
            <button type="submit" onClick={(e) => onSubmit(e)}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
