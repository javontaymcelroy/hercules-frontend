import React from "react";
import { Component } from "react";
import axios from "axios";

import "./SCSS/trackprogress.scss";

import down from "./assets/click_down.svg";
import up from "./assets/click_up.svg";

class TrackProgress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: parseInt(this.props.match.params.id),
      exercise: [],
      trackProgress: {
        exercise_id: parseInt(this.props.match.params.id),
        date: "",
        reps: 0,
        amountLifted: 0
      }
    };
  }

  componentDidMount() {
    axios
      .get(`https://hercules-backend.herokuapp.com/exercise/${this.state.id}`)
      .then(res => this.setState({ exercise: res.data }))
      .catch(err => console.log(err));
  }

  onSubmit = e => {
    e.preventDefault();
    axios
      .post(
        "https://hercules-backend.herokuapp.com/trackProgress",
        this.state.trackProgress
      )
      .then(() => {
        this.props.history.push(
          "/exercise/" + parseInt(this.props.match.params.id)
        );
      })
      .catch(err => console.log(err));
  };

  handleChanges = e => {
    this.setState({
      trackProgress: {
        ...this.state.trackProgress,
        [e.target.name]: e.target.value
      }
    });
  };

  repsIncrease = () => {
    this.setState({
      trackProgress: {
        reps: this.state.trackProgress.reps + 1
      }
    });
  };

  repsDecrease = () => {
    this.setState({
      trackProgress: {
        reps: this.state.trackProgress.reps - 1
      }
    });
  };

  amountLiftedIncrease = () => {
    this.setState({
      trackProgress: {
        amountLifted: this.state.trackProgress.amountLifted + 1
      }
    });
  };

  amountLiftedDecrease = () => {
    this.setState({
      trackProgress: {
        amountLifted: this.state.trackProgress.amountLifted - 1
      }
    });
  };

  // reps = event => {
  //   if (event.target.name === "incrementReps") {
  //     this.setState({
  //       trackProgress: {
  //         reps: this.state.trackProgress.reps + 1
  //       }
  //     });
  //   } else if (event.target.name === "decrementReps") {
  //     this.setState({
  //       trackProgress: {
  //         reps: this.state.trackProgress.reps - 1
  //       }
  //     });
  //   }
  // };

  // amountLifted = event => {
  //   if (event.target.name === "incrementLifted") {
  //     this.setState({
  //       trackProgress: {
  //         amountLifted: this.state.trackProgress.amountLifted + 1
  //       }
  //     });
  //   } else if (event.target.name === "decrementLifted") {
  //     this.setState({
  //       trackProgress: {
  //         amountLifted: this.state.trackProgress.amountLifted - 1
  //       }
  //     });
  //   }
  // };

  render() {
    return (
      <div className="track-progress-container">
        <div className="track-progress-content">
          <div className="heading">
            <h1>Start Tracking</h1>
            <h2>{this.state.exercise.exerciseTitle}</h2>
          </div>
          <form className="tracking-form-container" onSubmit={this.onSubmit}>
            <div className="rep-lift-flex">
              <div>
                <h6>REPS</h6>
                <input
                  name="reps"
                  type="text"
                  placeholder="OO"
                  value={this.state.trackProgress.reps}
                  onChange={this.handleChanges}
                />
              </div>
              <div>
                <h6>LIFTED</h6>
                <input
                  name="amountLifted"
                  type="text"
                  placeholder="OO"
                  value={this.state.trackProgress.amountLifted}
                  onChange={this.handleChanges}
                />
              </div>
            </div>
            <div className="arrow-container">
              <div className="rep-arrows">
                <img
                  src={down}
                  alt="decrease"
                  name="decrementReps"
                  className={
                    this.state.trackProgress.reps === 0 ? "inactive" : ""
                  }
                  onClick={this.repsDecrease}
                />
                <img
                  src={up}
                  alt="increase"
                  name="incrementReps"
                  onClick={this.repsIncrease}
                />
              </div>
              <div className="lift-arrows">
                <img
                  src={down}
                  alt="decrease"
                  name="decrementLifted"
                  onClick={this.amountLiftedDecrease}
                  className={
                    this.state.trackProgress.amountLifted === 0
                      ? "inactive"
                      : ""
                  }
                />
                <img
                  src={up}
                  alt="increase"
                  name="incrementLifted"
                  onClick={this.amountLiftedIncrease}
                />
              </div>
            </div>
            <h6>Date</h6>
            <input
              name="date"
              type="date"
              placeholder="e.g. June 11, 2019"
              value={this.state.trackProgress.date}
              onChange={this.handleChanges}
              className="date"
            />
            <button type="submit" className="track-btn">
              TRACK EXERCISE
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default TrackProgress;
