import React from "react";
import { Component } from "react";

import "./SCSS/search.scss";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="search-container">
        <form onSubmit={this.props.submitHandler}>
          <input
            placeholder="⌕ search exercises"
            type="text"
            name="search"
            value={this.props.search}
            onChange={this.props.searchHandler}
          />
        </form>
      </div>
    );
  }
}

export default Search;
