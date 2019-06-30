import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./SCSS/singleExercise.scss";

import go from "./assets/go.svg";

class SingleExercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: parseInt(this.props.match.params.id),
      exercise: [],
      targetRegionArea: "none"
    };
  }

  componentDidMount() {
    axios
      .get(`https://hercules-backend.herokuapp.com/exercise/${this.state.id}`)
      .then(res => this.setState({ exercise: res.data }))
      .catch(err => console.log(err));
  }

  delete = e => {
    e.preventDefault();
    axios
      .delete(
        "https://hercules-backend.herokuapp.com/exercise/" + this.state.id
      )
      .then(() => {
        this.props.history.push("/");
      });
  };

  render() {
    const exercise = this.state.exercise;
    return (
      <div className="single-exercise-container">
        <div className="exercise-content-container">
          <img src={go} className="go" alt="start exercise" />
          <div className="hero-section">
            <h1>{exercise.exerciseTitle}</h1>
            <div className="exercise-reps-lifted">
              <p>Previous Reps: {exercise.reps}</p>
              <p>|</p>
              <p>Previously lifted: {exercise.amountLifted}</p>
            </div>
          </div>
          <img
            src={exercise.customImg}
            className="hero-image"
            alt={exercise.exerciseTitle}
          />
          <div className="date-crud-container">
            <h6>Date created: {exercise.date}</h6>
            <div className="edit-del-flex">
              <Link to={`/exercise/${this.state.id}/edit`} className="links">
                <h6>Edit</h6>
              </Link>
              <p>|</p>
              <h6 onClick={this.delete} className="delete">
                Delete
              </h6>
            </div>
          </div>
          <div className="desc-container">
            <h2>Description</h2>
            <p>{exercise.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleExercise;
