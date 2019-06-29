import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

import videoBackground from "./assets/video_background.mp4";
import down from "./assets/chevrons-down.svg";

import "./SCSS/landingpage.scss";
import ReactPlayer from "react-player";

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
          <div className="hero-box-container">
            <div className="content-1">
              <h6>MICAH GABRIEL</h6>
              <p>
                “Hercules is the dopest, easiest workout out to use and to track
                track your progress.”
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
          </div>
        </div>
        <img src={down} className="down" alt="go down" />
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
          <ReactPlayer
            url={videoBackground}
            width="100%"
            height="106.8vh"
            pip={true}
            controls={false}
            className="hero-video"
            playing={true}
            loop={true}
            style={{
              filter: "brightness(50%)"
            }}
          />
        </div>
      </div>
    );
  }
}

export default LandingPage;
