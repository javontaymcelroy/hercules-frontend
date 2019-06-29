import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./components/SCSS/onboarding.scss";

import back from "./components/assets/Back.svg";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registration: {
        username: "",
        firstName: "",
        lastName: "",
        emailAddress: "",
        password: ""
      }
    };
  }

  register = e => {
    e.preventDefault();
    axios
      .post(
        "https://hercules-backend.herokuapp.com/register",
        this.state.registration
      )
      .then(() => {
        this.props.history.push("/sign_in");
      })
      .catch(err => console.log(err));
  };

  handleChanges = e => {
    this.setState({
      registration: {
        ...this.state.registration,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    const registration = this.state.registration;
    return (
      <div className="onboarding-container">
        <form onSubmit={this.register} className="form-container">
          <h1 className="onboarding-title">Create an account</h1>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={registration.username}
            onChange={this.handleChanges}
          />
          <input
            type="text"
            name="firstName"
            placeholder="first name"
            value={registration.firstName}
            onChange={this.handleChanges}
          />
          <input
            type="text"
            name="lastName"
            placeholder="last name"
            value={registration.lastName}
            onChange={this.handleChanges}
          />
          <input
            type="text"
            name="emailAddress"
            placeholder="email address"
            value={registration.emailAddress}
            onChange={this.handleChanges}
          />
          <input
            type="text"
            name="password"
            placeholder="password"
            value={registration.password}
            onChange={this.handleChanges}
          />
          <button type="submit" className="onboarding-btn">
            Let's go!
          </button>
          <Link to="/onboarding">
            <img src={back} className="back" alt="back" />
          </Link>
        </form>
      </div>
    );
  }
}

export default Register;
