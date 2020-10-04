import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { makeStyles } from "@material-ui/core";
import navbarStyleSheet from "./navbarStyles";
document.body.style.margin = "0";

const useStyles = makeStyles(navbarStyleSheet);

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const classes = useStyles();

  const authLinks = (
    <ul>
      <li>
        <Link to="/businessprofile">Profile</Link>
      </li>
      <li>
        <a onClick={logout} href="#!">
          Logout
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Sign In</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  );

  return (
    <div className={classes.nav}>
      <h3>
        <Link to="/">Business Mentor Matchmaker</Link>
      </h3>
      <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
    </div>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
