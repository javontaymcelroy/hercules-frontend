import React from "react";
import { Component } from "react";
import axios from "axios";

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
      <div>
        <form onSubmit={this.login} className="form-container">
          <input
            type="text"
            name="username"
            value={signIn.username}
            onChange={this.handleChanges}
            placeholder="username"
          />
          <input
            type="text"
            name="password"
            value={signIn.password}
            onChange={this.handleChanges}
            placeholder="password"
          />
          <button onClick={this.login} className="log-in-btn">
            Let's go!
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
