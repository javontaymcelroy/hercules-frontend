import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import back from "./components/assets/Back_arrow.svg";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signIn: {
        username: "",
        password: ""
      }
    };
  }

  login = e => {
    e.preventDefault();
    axios
      .post("https://hercules-backend.herokuapp.com/login", this.state.signIn)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  handleChanges = e => {
    this.setState({
      signIn: {
        ...this.state.signIn,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    const signIn = this.state.signIn;

    return (
      <div className="onboarding-container">
        <form onSubmit={this.login} className="form-container">
          <h1 className="onboarding-title">Sign in</h1>
          <input
            type="text"
            name="username"
            value={signIn.username}
            onChange={this.handleChanges}
            placeholder="username"
          />
          <input
            type="password"
            name="password"
            value={signIn.password}
            onChange={this.handleChanges}
            placeholder="password"
            className="password"
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

export default Login;
