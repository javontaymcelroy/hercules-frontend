import React from "react";
import { Component } from "react";
import { Route } from "react-router-dom";

import Register from "./Register";
import Login from "./Login";

import "./App.css";
import Dashboard from "./components/Dashboard";
import Navigation from "./Navigation";
import LandingPage from "./components/LandingPage";
import SingleExercise from "./components/SingleExercise";
import Onboarding from "./components/Onboarding";
import AddExercise from "./components/AddExercise";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navigation />
        {localStorage.token ? (
          <Route exact path="/" component={Dashboard} />
        ) : (
          <Route exact path="/" component={LandingPage} />
        )}

        <Route exact path="/sign_in" component={Login} />
        <Route exact path="/create_account" component={Register} />
        <Route exact path="/onboarding" component={Onboarding} />
        <Route exact path="/exercise/:id" component={SingleExercise} />
        <Route exact path="/add_exercise" component={AddExercise} />
      </div>
    );
  }
}

export default App;
