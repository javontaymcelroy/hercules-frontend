import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./SCSS/addExercise.scss";

class EditExercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editExercise: {
        id: parseInt(this.props.match.params.id),
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

  componentDidMount() {
    axios
      .get(
        `https://hercules-backend.herokuapp.com/exercise/${parseInt(
          this.props.match.params.id
        )}`
      )
      .then(res => {
        console.log(res);
        this.setState({
          editExercise: {
            exerciseTitle: res.data.exerciseTitle,
            date: res.data.date,
            description: res.data.description,
            targetRegionArea: res.data.targetRegionArea,
            reps: res.data.reps,
            amountLifted: res.data.amountLifted,
            customImg: res.data.customImg
          }
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onSubmit = e => {
    e.preventDefault();
    axios
      .put(
        `https://hercules-backend.herokuapp.com/exercise/${parseInt(
          this.props.match.params.id
        )}`,
        this.state.editExercise
      )
      .then(() => {
        this.props.history.push(
          `/exercise/${parseInt(this.props.match.params.id)}`
        );
      })
      .catch(err => console.log(err));
  };

  handleChanges = e => {
    this.setState({
      editExercise: {
        ...this.state.editExercise,
        [e.target.name]: e.target.value
      }
    });
  };

  handleChange(e) {
    this.setState({
      editExercise: {
        ...this.state.editExercise,
        targetRegionArea: e.target.value
      }
    });
  }

  render() {
    const editExercise = this.state.editExercise;
    return (
      <div className="add-exercise-container">
        <div className="add-exercise-content">
          <h1 className="page-title">Edit Exercise</h1>
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
              value={editExercise.exerciseTitle}
              required={true}
            />
            <h6>Date</h6>
            <input
              type="date"
              name="date"
              placeholder="e.g. MM DD YYYY"
              onChange={this.handleChanges}
              value={editExercise.date}
              required={true}
            />
            <h6>Description</h6>
            <textarea
              type="text"
              name="description"
              placeholder="Write a description for the workout."
              className="description"
              onChange={this.handleChanges}
              value={editExercise.description}
              required={true}
            />
            <h6>Target Region Area</h6>
            <select
              name="targetRegionArea"
              onChange={this.handleChange.bind(this)}
              value={editExercise.targetRegionArea}
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
                  value={editExercise.reps}
                  required={true}
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
                  value={editExercise.amountLifted}
                />
              </div>
            </div>
            <h6>Custom Image</h6>
            <input
              type="text"
              name="customImg"
              placeholder="Copy and paste an IMG url here."
              onChange={this.handleChanges}
              value={editExercise.customImg}
              required={true}
            />
            <button type="submit" className="CRUD-btn">
              Confirm Changes
            </button>
            <Link to={`/exercise/${parseInt(this.props.match.params.id)}`}>
              <button className="CRUD-btn cancel-btn">Cancel</button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default EditExercise;
