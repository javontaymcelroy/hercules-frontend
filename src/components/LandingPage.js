import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

import videoBackground from "./assets/video_background.mp4";

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
          <div className="secondary-nav-container">
            <div className="secondary-nav">
              <Link to="/about">About</Link>
              <a
                href="https://www.linkedin.com/in/javontay-mcelroy-663b81bb/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/javontaymcelroy/hercules-frontend"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="https://instagram.com/thekingmuze"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://twitter.com/thekingmuze"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href="https://javontaymcelroy.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Portfolio
              </a>
            </div>
          </div>
          {/* <div className="hero-box-container">
            <div className="content-1">
              <h6>MICAH GABRIEL</h6>
              <p>
                “Hercules is the dopest, easiest workout app to use to track
                your workout progress!”
              </p>
            </div>
            <div className="content-2">
              <h6>WORKOUT TRACKING</h6>
              <p>
                Track your workout progress with ease and convience. No other
                app can compete!
              </p>
            </div>
            <div className="content-3">
              <h6>Contact Us</h6>
            </div>
          </div> */}
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
        <div className="video-container">
          <video
            src={videoBackground}
            autoPlay={true}
            muted
            loop={true}
            className="hero-video"
          />
        </div>
      </div>
    );
  }
}

export default LandingPage;
