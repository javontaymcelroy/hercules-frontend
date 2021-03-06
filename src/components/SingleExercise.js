import React from "react";
import { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import moment from "moment";
import axios from "axios";
import { AreaChart, ColumnChart } from "react-chartkick";
import "chart.js";

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
      .then(res =>
        this.setState({
          progressTracking: res.data
        })
      )
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

  addDefaultSrc(ev) {
    ev.target.src =
      "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/65205880370953.5cdeeb0771679.jpg";
  }

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
        case "Abs":
          regionResult = require("./assets/Abs.svg");
          break;
        case "Glutes":
          regionResult = require("./assets/Glutes.svg");
          break;
        case "None":
          regionResult = require("./assets/none.svg");
          break;
        default:
          return;
      }
      return regionResult;
    };

    const exercise = this.state.exercise;
    const result = {};
    const date = this.state.progressTracking.forEach(item => {
      return (result[`${item.date}`] = item.reps);
    });

    const resultLifted = {};
    const lifted = this.state.progressTracking.forEach(item => {
      return (resultLifted[`${item.date}`] = item.amountLifted);
    });

    console.log(date, lifted);

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
            onError={this.addDefaultSrc}
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
              <img
                src={targetRegion(exercise.targetRegionArea)}
                className="target-body"
                alt={exercise.exerciseTitle}
              />
            </div>
            <div className="progress-tracking-container">
              <h1>Progress Tracking</h1>
              <div className="progress-graph">
                <div className="reps-graph">
                  <AreaChart
                    data={{ ...result }}
                    colors={["#ffec42"]}
                    ytitle="Repetitions"
                    xtitle="Date"
                    curve={true}
                    messages={{ empty: "No data" }}
                  />
                </div>
                <div className="lifted-graph">
                  <ColumnChart
                    data={{ ...resultLifted }}
                    colors={["#ffec42"]}
                    ytitle="Amount Lifted"
                    xtitle="Date"
                    curve={true}
                    className="column-chart"
                    messages={{ empty: "No data" }}
                  />
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
