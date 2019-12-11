import React from "react";
import { FilledInput } from "@material-ui/core";

export default class SearchCountry extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
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
