import React from "react";

import "./SCSS/about.scss";

import bg from "./assets/yoga.jpg";
import wireframes from "./assets/hercules-wireframe.png";
import userflow from "./assets/Blank_Diagram.png";
import firstLanding from "./assets/first_landingpage.png";

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
              <h6>User Flow Charts</h6>
            </div>
            <img src={userflow} className="image-break" alt="user flow chart" />
            <div className="article">
              <p className="bold">
                Day One - Part 1: Creating user flow charts for the app and
                landing page.
              </p>
              <p>
                Starting this project, I wanted to create a user flow chart so
                that there was a clear overview of how the app will be built and
                how the user will interact with it. I used a website called
                LucidChart to create my user flow chart. This phase was fairly
                simple, but there were some tweaking to ensure that the user
                flow was as clear as possible.
              </p>
            </div>
            <div className="header">
              <h6>Nr. 03</h6>
              <h6>User Interface - User Experience</h6>
              <h6>Low-Fidelity Designs</h6>
            </div>
            <img
              src={wireframes}
              className="image-break"
              alt="low-fidelity design"
            />
            <div className="article">
              <p className="bold">
                Day One - Part 2: Creating a low-fidelity design of the app and
                landing page.
              </p>
              <p>
                After creating the user flow charts, I went straight to creating
                a low-fidelity design of the app and landing page. I skipped the
                wire-framing phase because I had an initial vision of how I
                wanted the app to look. Using Whimsical to create my
                low-fidelity designs, I laid out the landing page and then a
                low-fi design for the mobile app.
                <br />
                <br />
                These phases, from the user flow to the low-fidelity designs,
                moved relatively quickly! I had ideas flowing and was able to
                knock out the designs. Throughout the process, I also did
                research and looked at other apps similar to the one I was
                designing. Doing so help me see what's already been done, what's
                required for a workout app, and what could I do to make my app
                different.
              </p>
            </div>
            <p className="bold-solo">
              Day Two - Part One: Creating a high-fidelity design of the app and
              landing page.
            </p>
            <div className="article-flex">
              <img
                src={firstLanding}
                className="image-break-half"
                alt="landing page iteration one"
              />
              <div className="article-half">
                <p>
                  My favorite phase, the first task of day two was to go from
                  low-fidelity to high-fidelity design. For this phase, I
                  primarily used Figma to create my high-fidelities. After a
                  couple hours of work, I sent my designs off for review and
                  feedback.
                  <br />
                  <br />
                  After receiving feedback, I made adjustments and tweaks. One
                  of them was experimenting with the design of the landing page.
                  The first iteration of the design had an "off-balanced" feel
                  which had to be adjusted. There was too much content on the
                  left side of the design, so that had to be corrected.
                  <br />
                  <br />
                  Another suggestion I received was to change the wording from
                  workouts to exercises. The currently flow of the app was
                  mainly best for an exercise app and not a full workout app. I
                  found that if I went in the direction of a full workout app,
                  my backend would've been a lot more complex as well as the
                  user flow. Given the time-frame, I went with just an app that
                  allowed users to create, read, update, and delete exercises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={bg} className="background-image" alt="background" />
    </div>
  );
};

export default AboutPage;
