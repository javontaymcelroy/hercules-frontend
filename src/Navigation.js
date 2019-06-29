import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./components/SCSS/navigation.scss";

import logo from "./components/assets/hercules_logo_gold.svg";
import profile from "./components/assets/user.svg";

const Navigation = () => {
  return (
    <div className="navigation-container">
      <Link to="/home">
        <img src={logo} className="logo" alt="logo" />
      </Link>
      <div className="inner-nav">
        <NavLink to="/dashboard" className="links">
          Home
        </NavLink>
        <NavLink to="/add_exercise" className="links">
          Add Exercise
        </NavLink>
        <Link to="/profile">
          <img src={profile} className="profile" alt="profile" />
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
