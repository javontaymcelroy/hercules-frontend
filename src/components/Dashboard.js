import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

import "./SCSS/dashboard.scss";

import accent from "./assets/Accent.svg";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: [],
      pageNumber: 1
    };
  }

  componentDidMount() {
    Axios.get(
      `https://hercules-backend.herokuapp.com/dashboard?page=${
        this.state.pageNumber
      }`
    )
      .then(res => this.setState({ exercises: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="dashboard-container">
        {this.state.exercises.slice(0, 1).map(exercise => (
          <>
            <div className="exercise-content-container">
              <img src={accent} className="accent" alt="accent" />
              <h1 className="exercise-title">{exercise.exerciseTitle}</h1>
              <p className="exercise-desc">{exercise.description}</p>
              <div className="rep-lifted-flex">
                <p>Previous Reps: {exercise.reps}</p>
                <p>|</p>
                <p>Previously Lifted: {exercise.amountLifted}</p>
              </div>
              <Link to={`/exercise/${exercise.id}`}>
                <button className="select-exercise-btn">Select Exercise</button>
              </Link>
            </div>
            <img
              src={exercise.customImg}
              className="dashboard-img"
              alt={exercise.exerciseTitle}
            />
          </>
        ))}
      </div>
    );
  }
}

export default Dashboard;
