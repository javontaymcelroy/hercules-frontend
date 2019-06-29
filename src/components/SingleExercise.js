import React from "react";
import { Component } from "react";
import axios from "axios";

import "./SCSS/singleExercise.scss";

class SingleExercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: parseInt(this.props.match.params.id),
      exercise: []
    };
  }

  componentDidMount() {
    axios
      .get(`https://hercules-backend.herokuapp.com/exercise/${this.state.id}`)
      .then(res => this.setState({ exercise: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    const exercise = this.state.exercise;
    return (
      <div className="single-exercise-container">
        <div className="exercise-content-container">
          <h1>{exercise.exerciseTitle}</h1>
        </div>
      </div>
    );
  }
}

export default SingleExercise;
