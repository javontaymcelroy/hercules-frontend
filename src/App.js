import React from "react";
import { Component } from "react";
import { Route } from "react-router-dom";

import Register from "./Register";
import Login from "./Login";

import "./App.css";
import Dashboard from "./components/Dashboard";
import Navigation from "./Navigation";
import LandingPage from "./components/LandingPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navigation />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/sign_in" component={Login} />
        <Route exact path="/create_account" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} />
      </div>
    );
  }
}

export default App;
