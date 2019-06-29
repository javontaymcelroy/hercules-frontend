import React from "react";

import { Link } from "react-router-dom";

import "./SCSS/onboarding.scss";
import logo from "./assets/hercules_logo_gold.svg";

const Onboarding = () => {
  return (
    <div className="onboarding-container">
      <div className="form-container">
        <img src={logo} className="logo" alt="logo" />
        <h1 className="onboarding-title welcome">WELCOME TO HERCULES!</h1>
        <p className="onboarding-caption">Sign up and start exploring</p>
        <Link to="/sign_in">
          <button className="onboarding-btn">Sign in</button>
        </Link>
        <Link to="/create_account">
          <button className="onboarding-btn create-account">
            Create an account
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Onboarding;
