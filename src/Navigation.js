import React from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import { Component } from "react";
import axios from "axios";

import "./components/SCSS/navigation.scss";

import logo from "./components/assets/hercules_logo_gold.svg";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: [],
      userId: localStorage.getItem("user_id")
    };
  }

  componentDidMount() {
    axios
      .get(`https://hercules-backend.herokuapp.com/users/${this.state.userId}`)
      .then(res => this.setState({ userInfo: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    const signOut = () => {
      localStorage.removeItem("token");
      this.props.history.push("/");
    };
    return (
      <div className="navigation-container">
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <div className="inner-nav">
          {localStorage.token ? (
            <NavLink to="/" className="links">
              Dashboard
            </NavLink>
          ) : null}

          {localStorage.token ? (
            <NavLink to="/add_exercise" className="links">
              Add Exercise
            </NavLink>
          ) : null}

          {!localStorage.token ? (
            <NavLink to="/sign_in" className="links">
              Sign In
            </NavLink>
          ) : null}

          {!localStorage.token ? (
            <NavLink to="/create_account" className="links">
              Sign Up
            </NavLink>
          ) : null}

          {localStorage.token ? (
            <NavLink to="/profile" className="links">
              {this.state.userInfo.firstName}
              <span> </span>
              {this.state.userInfo.lastName}
            </NavLink>
          ) : null}

          {localStorage.token ? (
            <button onClick={signOut} className="sign-out-btn">
              Sign Out
            </button>
          ) : null}
        </div>
      </div>
    );
  }
}

export default withRouter(Navigation);
