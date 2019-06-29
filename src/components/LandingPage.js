import React from "react";
import { Component } from "react";

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
          <h1>Welcome to Landing Page!</h1>
        </div>
      </div>
    );
  }
}

export default LandingPage;
