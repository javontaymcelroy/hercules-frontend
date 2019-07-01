import React from "react";
import { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

import "./SCSS/addExercise.scss";

import back from "./assets/Back_arrow.svg";

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
        this.props.history.push("/profile");
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

  handleChange(e) {
    this.setState({
      addingExercise: {
        ...this.state.addingExercise,
        targetRegionArea: e.target.value
      }
    });
  }

  render() {
    const AddExercise = this.state.addingExercise;
    return (
      <div className="add-exercise-container">
        <img
          src={back}
          alt="back"
          className="back"
          onClick={this.props.history.goBack}
        />
        <div className="add-exercise-content">
          <h1 className="page-title">Add An Exercise</h1>
          <form
            className="CRUD-form"
            onSubmit={this.onSubmit}
            autoComplete="off"
          >
            <h6>Exercise Title</h6>
            <input
              type="text"
              name="exerciseTitle"
              placeholder="e.g. Quick Hit Abs"
              onChange={this.handleChanges}
              value={AddExercise.exerciseTitle}
              required={true}
            />
            <h6>Date</h6>
            <input
              name="date"
              type="date"
              placeholder="e.g. MM DD YYYY"
              onChange={this.handleChanges}
              value={AddExercise.date}
              required={true}
            />
            <h6>Description</h6>
            <textarea
              type="text"
              name="description"
              placeholder="Write a description for the workout."
              className="description"
              onChange={this.handleChanges}
              value={AddExercise.description}
              required={true}
            />
            <h6>Target Region Area</h6>
            <select
              name="targetRegionArea"
              onChange={this.handleChange.bind(this)}
              value={AddExercise.targetRegionArea}
            >
              <option value="Biceps">Biceps</option>
              <option value="Triceps">Triceps</option>
              <option value="Legs">Legs</option>
              <option value="Shoulders">Shoulders</option>
              <option value="Back">Back</option>
              <option value="Abs">Abs</option>
              <option value="Glutes">Glutes</option>
              <option value="None">None</option>
            </select>
            <div className="rep-lift-flex">
              <div>
                <h6>Repititions</h6>
                <input
                  type="number"
                  name="reps"
                  placeholder="00"
                  onChange={this.handleChanges}
                  value={AddExercise.reps}
                />
              </div>
              <h1>AND</h1>
              <div>
                <h6 className="amount-lifted">Amount Lifted</h6>
                <input
                  type="number"
                  name="amountLifted"
                  placeholder="00"
                  onChange={this.handleChanges}
                  value={AddExercise.amountLifted}
                />
              </div>
            </div>
            <h6>Custom Image</h6>
            <input
              type="text"
              name="customImg"
              placeholder="Copy and paste an IMG url here."
              onChange={this.handleChanges}
              value={AddExercise.customImg}
              required={true}
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

export default withRouter(AddExercise);
