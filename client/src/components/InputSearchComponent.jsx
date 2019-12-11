import React from "react";
import { FilledInput } from "@material-ui/core";
import PropTypes from "prop-types";

export default class SearchCountry extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: ''
    };
  }

  render() {
    return (
      <React.Fragment>
        <h3>Input search </h3>
        <FilledInput placeholder="Type your country Name ..." />
      </React.Fragment>
    );
  }
}
