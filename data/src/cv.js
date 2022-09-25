import { CVTextEnglish } from "./text";
import { CVTextGerman } from "./text";
import React from "react";

export default class CV extends React.Component {
  render() {
    return (
      <>
        {this.props.language === "de" ? <CVTextGerman /> : <CVTextEnglish />}
        <hr></hr>
      </>
    );
  }
}
