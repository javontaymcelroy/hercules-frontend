import React from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import { Component } from "react";
import axios from "axios";

import "./components/SCSS/navigation.scss";

import logo from "./components/assets/hercules_logo_gold.svg";
import menu from "./components/assets/menu.svg";
import profile from "./components/assets/profile.svg";
import x from "./components/assets/x.svg";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: localStorage.getItem("user_id"),
      userInfo: []
    };
  }

  componentDidMount() {
    axios
      .get(`https://hercules-backend.herokuapp.com/users/${this.state.userId}`)
      .then(res => this.setState({ userInfo: res.data }))
      .catch(err => console.log(err));
  }

  openNav = () => {
    let openMenu = document.querySelector(".menu-overlay");
    openMenu.style.display = "inline";
  };

  closeNav = () => {
    let closedMenu = document.querySelector(".menu-overlay");
    closedMenu.style.display = "none";
  };

  render() {
    const signOut = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user_id");
      this.props.history.push("/");
    };

    const signOutMobile = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user_id");
      this.props.history.push("/");
      let closedMenu = document.querySelector(".menu-overlay");
      closedMenu.style.display = "none";
    };

    return (
      <>
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

            {localStorage.user_id ? (
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

        <div className="mobile-nav">
          <img src={menu} className="menu" alt="menu" onClick={this.openNav} />
          <Link to="/">
            <img src={logo} className="logo" alt="logo" />
          </Link>
          {localStorage.token ? (
            <Link to="/profile">
              <img src={profile} className="profile" alt="profile" />
            </Link>
          ) : null}
        </div>
        <div className="menu-overlay">
          <img src={x} className="x" alt="close" onClick={this.closeNav} />
          <div className="inner-nav">
            {localStorage.token ? (
              <NavLink to="/" className="links" onClick={this.closeNav}>
                Dashboard
              </NavLink>
            ) : null}

            {localStorage.token ? (
              <NavLink
                to="/add_exercise"
                className="links"
                onClick={this.closeNav}
              >
                Add Exercise
              </NavLink>
            ) : null}

            {!localStorage.token ? (
              <NavLink to="/sign_in" className="links" onClick={this.closeNav}>
                Sign In
              </NavLink>
            ) : null}

            {!localStorage.token ? (
              <NavLink
                to="/create_account"
                className="links"
                onClick={this.closeNav}
              >
                Sign Up
              </NavLink>
            ) : null}

            {localStorage.user_id ? (
              <NavLink to="/profile" className="links" onClick={this.closeNav}>
                {this.state.userInfo.firstName}
                <span> </span>
                {this.state.userInfo.lastName}
              </NavLink>
            ) : null}

            {localStorage.token ? (
              <button onClick={signOutMobile} className="sign-out-btn">
                Sign Out
              </button>
            ) : null}
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Navigation);
