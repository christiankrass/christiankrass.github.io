/* eslint-disable jsx-a11y/heading-has-content */
import $ from "jquery";
import React from "react";
import { TitleText } from "./text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

//Do not change!
let globalText = [];
let preventDouble = true;
let processDelay = 0;
let realTimeTextOutput = "";
let timerLength = 0;
let timerIndex = 0;

//Dynamic Output fixed setter
let topNav = document.getElementsByClassName("topDiv");
let el = document.getElementsByClassName("introtext");
let backupITPostion = "";
let innerDocumentHeight = "";
let backupDif = "";

// RT Output Settings
let pauseBetweenWriteAndDelete = 45;
let writeSpeed = 40;
let deleteSpeed = 25;

let gerText = TitleText.prototype.getGermanText();
let engText = TitleText.prototype.getEnglishText();

window.onload = (event) => {
  backupITPostion = el[0].offsetTop;
  innerDocumentHeight = event.currentTarget.innerHeight;
};

window.onresize = (event) => {
  if (el[0].offsetTop > 0) {
    innerDocumentHeight = event.currentTarget.innerHeight;
    backupITPostion = el[0].offsetTop + topNav[0].offsetHeight;
  }
};

window.onscroll = function () {
  if (backupITPostion - innerDocumentHeight > 0)
    backupDif = backupITPostion - innerDocumentHeight;

  if (backupITPostion - innerDocumentHeight < 0) {
    backupITPostion = innerDocumentHeight + backupDif;
  }

  if (
    document.documentElement.scrollTop + topNav[0].offsetHeight >
    backupITPostion
  ) {
    $(".introtext").css({ position: "fixed" });
  }

  if (document.documentElement.scrollTop < backupITPostion) {
    $(".introtext").css({
      position: "relative",
      top: "25px",
      right: "0px",
      left: "0px",
    });
  }
};

const timer = () => {
  processDelay = 0;
  timerLength = globalText[timerIndex].length;
  setTimeout(() => {
    timer();
    for (let i of globalText[timerIndex]) {
      output(i);
    }
    processDelay += pauseBetweenWriteAndDelete + timerLength * 2;
    // eslint-disable-next-line no-unused-vars
    for (let i of globalText[timerIndex]) {
      pop();
    }
    if (timerIndex < globalText.length - 1) {
      timerIndex += 1;
    } else {
      //Kill all running Timeouts
      var killId = setTimeout(function () {
        for (var i = killId; i > 0; i--) {
          clearInterval(i);
        }
        //Animation section
        $(".introtext").animate({ width: "30px", marginLeft: "5vw" }, "slow");
        $(".dynamic-title").css({ animation: "none" });
        $(".refreshBtn").css({ display: "block" });
        $(".refreshBtn").animate({ opacity: "100%" });
      }, timerLength * writeSpeed +
        (pauseBetweenWriteAndDelete + timerLength * 2) * deleteSpeed +
        timerLength * deleteSpeed -
        800);
    }
  }, timerLength * writeSpeed + (pauseBetweenWriteAndDelete + timerLength * 2) * deleteSpeed + timerLength * deleteSpeed);
};

const output = (value) => {
  processDelay += 1;
  setTimeout(() => {
    realTimeTextOutput += value;
    $(".dynamic-title").text(realTimeTextOutput);
  }, processDelay * writeSpeed);
};

const pop = () => {
  processDelay += 1;
  setTimeout(() => {
    realTimeTextOutput = realTimeTextOutput.slice(0, -1);
    $(".dynamic-title").text(realTimeTextOutput);
  }, processDelay * deleteSpeed);
};

export default class Title extends React.Component {
  constructor(props) {
    super(props);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    if (this.props.language === "de" && preventDouble === true) {
      preventDouble = false;
      globalText = gerText;
      timer();
    } else if (this.props.language !== "de" && preventDouble === true) {
      preventDouble = false;
      globalText = engText;
      timer();
    }
  }

  reset() {
    $(".introtext").animate({ width: "80vw", marginLeft: "9vw" }, "slow");
    $(".refreshBtn").animate({ opacity: "0%" }, () => {
      $(".refreshBtn").css({ display: "none" });
      $(".dynamic-title").css({ animation: "" });
    });
    timerIndex = 0;
    timer();
  }

  render() {
    let headLine = "";
    if (this.props.language === "de") {
      headLine = <h2 className="introduction-title">Einleitung</h2>;
      globalText = gerText;
    } else {
      headLine = <h2 className="introduction-title">Introduction</h2>;
      globalText = engText;
    }
    return (
      <>
        {headLine}
        <br />
        <section className="introtext">
          <FontAwesomeIcon
            icon={faRotateRight}
            className="refreshBtn"
            size="xl"
            pull="left"
            onClick={this.reset}
          />
          <p className="dynamic-title"></p>
        </section>
        <hr></hr>
      </>
    );
  }
}
