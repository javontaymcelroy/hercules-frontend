import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import add from "./assets/add_workout.svg";

import "./SCSS/profile.scss";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: localStorage.getItem("user_id"),
      userInfo: [],
      exercises: []
    };
  }

  componentDidMount() {
    axios
      .get(`https://hercules-backend.herokuapp.com/users/${this.state.userId}`)
      .then(res => this.setState({ userInfo: res.data }))
      .catch(err => console.log(err));

    axios
      .get(
        `https://hercules-backend.herokuapp.com/user/exercise/${
          this.state.userId
        }`
      )
      .then(res => this.setState({ exercises: res.data }))
      .catch(err => console.log(err));
  }

  addDefaultSrc(ev) {
    ev.target.src =
      "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/65205880370953.5cdeeb0771679.jpg";
  }

  render() {
    const userInfo = this.state.userInfo;
    const exercises = this.state.exercises;

    return (
      <div className="profile-page-container">
        <div className="profile-page-content">
          <h1 className="welcome">Welcome Back, {userInfo.firstName} 👋</h1>
          <div className="exercises-container">
            <div className="top-header-flex">
              <h1>Your exercises</h1>
              <Link to="/add_exercise">
                <img src={add} className="add" alt="add exercise" />
              </Link>
            </div>
            <div className="exercise-flex">
              {exercises.map(exercise => (
                <>
                  <Link to={`/exercise/${exercise.id}`} className="image-links">
                    <div className="image-content">
                      <h1 className="exercise-title">
                        {exercise.exerciseTitle}
                      </h1>
                      <img
                        src={exercise.customImg}
                        className="exercise-img"
                        alt={exercise.exerciseTitle}
                        onError={this.addDefaultSrc}
                      />
                    </div>
                  </Link>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
