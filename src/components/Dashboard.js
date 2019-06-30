import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

import "./SCSS/dashboard.scss";

import accent from "./assets/Accent.svg";
import prev from "./assets/left_button.svg";
import next from "./assets/right_button.svg";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [],
      pageNumber: 1
    };
  }

  componentDidMount() {
    this.getContent(this.state.content, this.state.pageNumber);
  }

  getContent = pageNumber => {
    Axios.get(
      `https://hercules-backend.herokuapp.com/dashboard?page=${pageNumber}`
    )
      .then(res => this.setState({ content: res.data }))
      .catch(err => console.log(err));
  };

  pageChange = event => {
    if (event.target.name === "prev" && this.state.pageNumber === 1) {
      return;
    }

    if (event.target.name === "next") {
      this.getContent(this.state.pageNumber + 1);
      this.setState({ pageNumber: this.state.pageNumber + 1 });
    } else {
      this.getContent(this.state.pageNumber - 1);
      this.setState({ pageNumber: this.state.pageNumber - 1 });
    }
  };

  render() {
    return (
      <div className="dashboard-container">
        {this.state.content.map(content => (
          <>
            <div className="exercise-content-container">
              <img src={accent} className="accent" alt="accent" />
              <h2>Community Exercises</h2>
              <h1 className="exercise-title">{content.exerciseTitle}</h1>
              <p className="exercise-desc">
                {content.description.slice(0, 350)}...
              </p>
              <div className="rep-lifted-flex">
                <p>Previous Reps: {content.reps}</p>
                <p>|</p>
                <p>Previously Lifted: {content.amountLifted}</p>
              </div>
              <div className="select-pages-container">
                <Link to={`/exercise/${content.id}`}>
                  <button className="select-exercise-btn">
                    Select Exercise
                  </button>
                </Link>
                <div className="page-buttons-container">
                  <img
                    src={prev}
                    className={
                      this.state.pageNumber === 1
                        ? "page_btns inactive"
                        : "page_btns"
                    }
                    name="prev"
                    alt="previous page"
                    onClick={this.pageChange}
                  />
                  <img
                    src={next}
                    className="page_btns"
                    name="next"
                    alt="next page"
                    onClick={this.pageChange}
                  />
                </div>
              </div>
            </div>
            <img
              src={content.customImg}
              className="dashboard-img"
              alt={content.exerciseTitle}
            />
          </>
        ))}
      </div>
    );
  }
}

export default Dashboard;
