import React from "react";
import { Component } from "react";
import axios from "axios";

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
      <div>
        <form onSubmit={this.register} className="form-container">
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
        </form>
        <button className="log-in-btn">Let's go!</button>
      </div>
    );
  }
}

export default Register;
