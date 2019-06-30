import React from "react";
import { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import moment from "moment";
import axios from "axios";

import "./SCSS/singleExercise.scss";

import go from "./assets/go.svg";

class SingleExercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: parseInt(this.props.match.params.id),
      exercise: [],
      progressTracking: []
    };
  }

  componentDidMount() {
    axios
      .get(`https://hercules-backend.herokuapp.com/exercise/${this.state.id}`)
      .then(res => this.setState({ exercise: res.data }))
      .catch(err => console.log(err));

    axios
      .get(
        `https://hercules-backend.herokuapp.com/exercise/${
          this.state.id
        }/progressTracking`
      )
      .then(res => this.setState({ progressTracking: res.data }))
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
    const targetRegion = type => {
      let regionResult;
      switch (type) {
        case "Legs":
          regionResult = require("./assets/Legs.svg");
          break;
        case "Back":
          regionResult = require("./assets/Back.svg");
          break;
        case "Chest":
          regionResult = require("./assets/Chest.svg");
          break;
        case "Biceps":
          regionResult = require("./assets/Biceps.svg");
          break;
        case "Triceps":
          regionResult = require("./assets/Triceps.svg");
          break;
        case "Shoulders":
          regionResult = require("./assets/Shoulders.svg");
          break;
        case null:
          regionResult = require("./assets/none.svg");
          break;
      }
      return regionResult;
    };

    const exercise = this.state.exercise;
    return (
      <div className="single-exercise-container">
        <Link to={`/exercise/${this.state.id}/track_progress`}>
          <img src={go} className="go" alt="start exercise" />
        </Link>
        <div className="exercise-content-container">
          <div className="hero-section">
            <h1>{exercise.exerciseTitle}</h1>
            <div className="exercise-reps-lifted">
              <p>Previous Reps: {exercise.reps}</p>
              <p>|</p>
              <p>Previously lifted: {exercise.amountLifted}</p>
            </div>
          </div>
          <div
            className="hero-image"
            style={{
              objectFit: "cover",
              backgroundAttachment: "fixed",
              backgroundImage: `url(${exercise.customImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
          <div className="date-crud-container">
            <h6>
              Date created:{" "}
              {moment(exercise.date, "mm-dd-yyyy").format("MMMM DD YYYY")}
            </h6>

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
          <div className="target-progress-flex">
            <div className="target-region-container">
              <h1>Target Region Area</h1>
              <img src={targetRegion(exercise.targetRegionArea)} />
            </div>
            <div className="progress-tracking-container">
              <h1>Progress Tracking</h1>
              <div className="progress-tracking-flex">
                <div className="column left">
                  <h2>DATE</h2>
                  {this.state.progressTracking.map(data => (
                    <>
                      <p>
                        {moment(data.date, "mm-dd-yyyy").format("MMMM DD YYYY")}
                      </p>
                    </>
                  ))}
                </div>
                <div className="column center">
                  <h2>REPS</h2>
                  {this.state.progressTracking.map(data => (
                    <>
                      <p>{data.reps}</p>
                    </>
                  ))}
                </div>
                <div className="column right">
                  <h2>AMOUNT LIFTED</h2>
                  {this.state.progressTracking.map(data => (
                    <>
                      <p>{data.amountLifted}</p>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SingleExercise);
