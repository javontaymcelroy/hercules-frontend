import React from "react";

import "./SCSS/about.scss";

import bg from "./assets/yoga.jpg";

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>
          About
          <br />
          Hercules.
        </h1>
        <div className="scroll-container">
          <h1>Get to know us.</h1>
          <p>Scroll down to learn more.</p>
        </div>
        <div className="article-container">
          <div className="header">
            <h6>Nr. 01</h6>

            <h6>The Making of Hercules</h6>
            <h6>The pitch</h6>
          </div>
        </div>
      </div>
      <img src={bg} className="background-image" alt="background" />
    </div>
  );
};

export default AboutPage;
