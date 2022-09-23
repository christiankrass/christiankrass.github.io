/* eslint-disable jsx-a11y/heading-has-content */
import $ from "jquery";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

let gerLangUpdate = false;
let engLangUpdate = false;

let preventDoubleTimer = false;
let processDelay = 0;
let realTimeTextOutput = "";
let timerLength = 0;
let timerIndex = 0;
// Input Settings
let pauseBetweenWriteAndDelete = 45;
let writeSpeed = 80;
let deleteSpeed = 30;

let gerText = [
  "Hallo.",
  "Mein Name ist Christian Krass.",
  "Ich bin ein ambitionierter Webentwickler.",
  "Als Hauptkomponente dieses Portfolios wurde React verwendet.",
  "Stilistisch wurden Material UI, Bootstrap, simpleParallax & Font Awesome angewendet.",
  "Zur einfacheren und direkten Manipulation von HTML-Texten wurde jQuery eingesetzt.",
  "Als Stylesheet wurde hier SASS gewählt.",
  "Wenn ich Ihr Interesse geweckt habe, können Sie mich gerne kontaktieren.",
  "Die E-Mail-Adresse und die Rufnummer finden Sie im Lebenslauf unter Persönliche Informationen.",
  "Vielen Dank, dass Sie sich die Zeit genommen haben, die Website zu besuchen, und ich wünsche Ihnen einen schönen Tag.",
];
let engText = [
  "Hello.",
  "My name is Christian Krass.",
  "I am an ambitious web developer.",
  "React was used as the main component of this portfolio.",
  "Stylistically Material UI, Bootstrap, simpleParallax & Font Awesome were applied.",
  "For easier and direct manipulation of HTML texts jQuery was utilized.",
  "SASS was selected as the stylesheet here.",
  "If I could catch your interest, feel free to contact me.",
  "You can find the email address and number in the resume under Personal Information.",
  "Thank you for taking the time to visit and have a great day.",
];

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: [],
    };
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    if (
      sessionStorage.getItem("language") === "de" &&
      preventDoubleTimer === false
    ) {
      preventDoubleTimer = true;
      this.setState(
        {
          text: gerText,
        },
        () => {
          this.timer();
        }
      );
    } else if (
      sessionStorage.getItem("language") !== "de" &&
      preventDoubleTimer === false
    ) {
      preventDoubleTimer = true;
      this.setState(
        {
          text: engText,
        },
        () => {
          this.timer();
        }
      );
    }
  }

  componentDidUpdate() {
    if (sessionStorage.getItem("language") !== "de") {
      $(".introduction-title").text("Introduction");
      if (!gerLangUpdate) {
        gerLangUpdate = true;
        engLangUpdate = false;
        this.setState({
          text: engText,
        });
      }
    } else if (sessionStorage.getItem("language") === "de") {
      $(".introduction-title").text("Einleitung");
      if (!engLangUpdate) {
        engLangUpdate = true;
        gerLangUpdate = false;
        this.setState({
          text: gerText,
        });
      }
    }
  }

  timer() {
    processDelay = 0;
    timerLength = this.state.text[timerIndex].length;
    setTimeout(() => {
      this.timer();
      for (let i of this.state.text[timerIndex]) {
        this.timeOutOutput(i);
      }
      processDelay += pauseBetweenWriteAndDelete + timerLength * 2;
      // eslint-disable-next-line no-unused-vars
      for (let i of this.state.text[timerIndex]) {
        this.timeOutPop();
      }
      if (timerIndex < this.state.text.length - 1) {
        timerIndex += 1;
      } else {
        //Kill all running Timeouts
        var killId = setTimeout(function () {
          for (var i = killId; i > 0; i--) {
            clearInterval(i);
          }
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
  }

  timeOutOutput(value) {
    processDelay += 1;
    setTimeout(() => {
      realTimeTextOutput += value;
      $(".dynamic-title").text(realTimeTextOutput);
    }, processDelay * writeSpeed);
  }

  timeOutPop() {
    processDelay += 1;
    setTimeout(() => {
      realTimeTextOutput = realTimeTextOutput.slice(0, -1);
      $(".dynamic-title").text(realTimeTextOutput);
    }, processDelay * deleteSpeed);
  }

  reset() {
    $(".introtext").animate({ width: "80vw", marginLeft: "9vw" }, "slow");
    $(".refreshBtn").animate({ opacity: "0%" }, () => {
      $(".refreshBtn").css({ display: "none" });
      $(".dynamic-title").css({ animation: "" });
    });
    timerIndex = 0;
    this.timer();
  }

  render() {
    return (
      <>
        <h2 className="introduction-title"></h2>
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
      </>
    );
  }
}

export default Title;
