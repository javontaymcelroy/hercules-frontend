import React from "react";

import "./SCSS/about.scss";

import bg from "./assets/yoga.jpg";
import wireframes from "./assets/hercules-wireframe.png";

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
          <div className="article-one">
            <div className="header">
              <h6>Nr. 01</h6>
              <h6>Case Study: The Making of Hercules</h6>
              <h6>The pitch</h6>
            </div>
            <div className="article">
              <p className="bold">
                Pitch: Weightlifting Journal app - It's hard to keep track of
                how many reps you can do for time, or how much you usually
                deadlift. This app keep it all organized and tracked for you.
              </p>
              <p>
                Hercules started out as Build Weeks project for the school I
                attended, as of me writing this article, called Lambda School.
                Every five weeks, students sign up for projects that they will
                build within five days, while collaborating with other students
                across the cohort.
                <br />
                <br />
                Every student is placed on a team, and whatever unit the student
                is currently in, is their assigned role for the project. For
                example: If you are currently in the Front-End unit of the
                Full-Stack Web curriculum, your role for that build week is,
                Front-End architect.
                <br />
                <br />I originally signed up for the project as a UI / UX
                Designer, but then that changed after the Build Week concluded.
                We'll talk more about that later.
              </p>
            </div>
            <div className="header">
              <h6>Nr. 02</h6>
              <h6>User Interface - User Experience</h6>
              <h6>The Wireframes</h6>
            </div>
            <img src={wireframes} className="image-break" alt="wireframes" />
            <div className="article">
              <p className="bold">
                Day One - Part 2: Creating wireframes for both the Landing Page
                and the app.
              </p>
              <p>
                I started working on the wireframes 2 days prior to the kick-off
                of Build Weeks, which starts on a Friday. I had to move quickly
                since I only had two days to quickly come up with a full design
                for my team.
                <br />
                <br />
                I used a website called Whimsical to create my wireframes. This
                process moved rather quickly since I had the user-flow chart
                completed. I had a concept in my mind for the app already so
                that also help speed up the workflow. I experiemented a bit with
                the layout, consistently doing research, finding competitor apps
                and designs to see what's already been done and what I could do
                better.
                <br />
                <br />
                After about an hour, I had a wireframe that I could create my
                high-fidelity designs from.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img src={bg} className="background-image" alt="background" />
    </div>
  );
};

export default AboutPage;
