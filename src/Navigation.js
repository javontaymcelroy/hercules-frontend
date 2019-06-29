import React from "react";
import { NavLink, Link, withRouter } from "react-router-dom";

import "./components/SCSS/navigation.scss";

import logo from "./components/assets/hercules_logo_gold.svg";
import profile from "./components/assets/user.svg";

const Navigation = props => {
  const signOut = () => {
    localStorage.removeItem("token");
    props.history.push("/");
  };

  return (
    <div className="navigation-container">
      <Link to="/">
        <img src={logo} className="logo" alt="logo" />
      </Link>
      <div className="inner-nav">
        {localStorage.token ? (
          <NavLink to="/dashboard" className="links">
            Dashboard
          </NavLink>
        ) : null}

        {localStorage.token ? (
          <NavLink to="/add_exercise" className="links">
            Add Exercise
          </NavLink>
        ) : null}

        {!localStorage.token ? (
          <NavLink to="/sign_in" className="links">
            Sign In
          </NavLink>
        ) : null}

        {!localStorage.token ? (
          <NavLink to="/create_account" className="links">
            Sign Up
          </NavLink>
        ) : null}

        {localStorage.token ? (
          <button onClick={signOut} className="sign-out-btn">
            Sign Out
          </button>
        ) : null}

        {localStorage.token ? (
          <Link to="/profile">
            <img src={profile} className="profile" alt="profile" />
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default withRouter(Navigation);
