import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

import heroImg from "./assets/hero_image.png";

import "./SCSS/landingpage.scss";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="landing-page-container">
        <div className="landing-page-content">
          <div className="hero-title-tag">
            <h1>HERCULES</h1>
            <p>THE WEIGHTLIFTING APP TO RULE THEM ALL.</p>
            <Link to="/onboarding">
              <button className="CTA-btn">Get started</button>
            </Link>
          </div>
        </div>
        <div className="borders">
          <span className="border" />
          <span className="border" />
          <span className="border" />
          <span className="border" />
          <span className="border" />
          <span className="border" />
          <span className="border" />
          <span className="border" />
          <span className="border" />
        </div>
        <img src={heroImg} className="hero-image" alt="background" />
      </div>
    );
  }
}

export default LandingPage;
