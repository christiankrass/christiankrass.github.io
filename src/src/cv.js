import { CVText } from "./text";
import React from "react";

export default class CV extends React.Component {
  render() {
    return (
      <>
        <CVText language={this.props.language} />
        <hr></hr>
      </>
    );
  }
}
