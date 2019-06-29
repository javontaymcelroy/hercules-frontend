import React from "react";
import { Component } from "react";
import axios from "axios";

import "./SCSS/addExercise.scss";

class AddExercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addingExercise: {
        user_id: localStorage.user_id,
        exerciseTitle: "",
        date: "",
        description: "",
        targetRegionArea: "",
        reps: 0,
        amountLifted: 0,
        customImg: ""
      }
    };
  }

  onSubmit = e => {
    e.preventDefault();
    axios
      .post(
        "https://hercules-backend.herokuapp.com/exercise",
        this.state.addingExercise
      )
      .then(() => {
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  handleChanges = e => {
    this.setState({
      addingExercise: {
        ...this.state.addingExercise,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    const AddExercise = this.state.addingExercise;
    return (
      <div className="add-exercise-container">
        <div className="add-exercise-content">
          <h1 className="page-title">Add A Exercise</h1>
          <form className="CRUD-form" onSubmit={this.onSubmit}>
            <h6>Exercise Title</h6>
            <input
              type="text"
              name="exerciseTitle"
              placeholder="e.g. Quick Hit Abs"
              onChange={this.handleChanges}
              value={AddExercise.exerciseTitle}
            />
            <h6>Date</h6>
            <input
              type="text"
              name="date"
              placeholder="e.g. MM DD YYYY"
              onChange={this.handleChanges}
              value={AddExercise.date}
            />
            <h6>Description</h6>
            <input
              type="text"
              name="description"
              placeholder="Write a description for the workout."
              className="description"
              onChange={this.handleChanges}
              value={AddExercise.description}
            />
            <h6>Target Region Area</h6>
            <input
              type="text"
              name="targetRegionArea"
              placeholder="Legs"
              onChange={this.handleChanges}
              value={AddExercise.targetRegionArea}
            />
            <h6>Repititions</h6>
            <input
              type="number"
              name="reps"
              placeholder="00"
              onChange={this.handleChanges}
              value={AddExercise.reps}
            />
            <h6>Amount Lifted</h6>
            <input
              type="number"
              name="amountLifted"
              placeholder="00"
              onChange={this.handleChanges}
              value={AddExercise.amountLifted}
            />
            <h6>Custom Image</h6>
            <input
              type="text"
              name="customImg"
              placeholder="Copy and paste an IMG url here."
              onChange={this.handleChanges}
              value={AddExercise.customImg}
            />
            <button type="submit" className="CRUD-btn">
              Create exercise
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddExercise;
