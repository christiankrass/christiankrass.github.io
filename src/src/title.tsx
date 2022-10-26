/* eslint-disable jsx-a11y/heading-has-content */
import $ from "jquery";
import React from "react";
import { TitleText } from "./text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

//Do not change!
let globalText: Array<string> = [];
let preventDouble: boolean = true;
let processDelay: number = 0;
let realTimeTextOutput: string = "";
let timerLength: number = 0;
let timerIndex: number = 0;

let introtext = document.getElementsByClassName(
  "introtext"
) as HTMLCollectionOf<HTMLDivElement>;
//Dynamic Output fixed setter
let backupIntroTextPostion: number = 0;
let innerDocumentHeight: number = 0;
let backupDifferenceBetweenIntroAndTopDocument: number = 0;

let gerText = TitleText.prototype.getGermanText();
let engText = TitleText.prototype.getEnglishText();

//Browser Check
const userAgent = navigator.userAgent;
// let isChromium = window.chrome;
let winNav = window.navigator;
// let vendorName = winNav.vendor;
// let isOpera = typeof window.opr !== "undefined";
let isIEedge = winNav.userAgent.indexOf("Edg") > -1;
let isIOSChrome = winNav.userAgent.match("CriOS");
let isChromeOnMobile = false;

//Settings which can be changed!
// RT Output Settings
let pauseBetweenWriteAndDelete = 45;
let writeSpeed = 40;
let deleteSpeed = 25;
// Gap Dynamic Title Settings
let dynmaicTitleGap = 25;

if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(
    userAgent
  )
) {
  isChromeOnMobile = true;
}

window.onload = (event) => {
  if (isIOSChrome || isChromeOnMobile) {
    //Chrome on IOS or Android
    setTimeout(() => {
      backupIntroTextPostion = introtext[0].offsetTop;
      innerDocumentHeight = event.currentTarget.innerHeight;
    }, 100);
  } else if (
    // isChromium !== null &&
    // typeof isChromium !== "undefined" &&
    // vendorName === "Google Inc." &&
    // isOpera === false &&
    isIEedge === false
  ) {
    //Chrome on Desktop
    backupIntroTextPostion = introtext[0].offsetTop;
    innerDocumentHeight = event.currentTarget.innerHeight;
  } else {
    //Not Chrome
    setTimeout(() => {
      backupIntroTextPostion = introtext[0].offsetTop;
      innerDocumentHeight = event.currentTarget.innerHeight;
    }, 100);
  }
};

window.onresize = (event) => {
  if (introtext[0].offsetTop > 0) {
    innerDocumentHeight = event.currentTarget.innerHeight;
    backupIntroTextPostion = introtext[0].offsetTop - dynmaicTitleGap;
  }
};

window.onscroll = function () {
  if (backupIntroTextPostion - innerDocumentHeight > 0)
    backupDifferenceBetweenIntroAndTopDocument =
      backupIntroTextPostion - innerDocumentHeight;

  if (backupIntroTextPostion - innerDocumentHeight < 0) {
    backupIntroTextPostion =
      innerDocumentHeight + backupDifferenceBetweenIntroAndTopDocument;
  }
  if (
    document.documentElement.scrollTop + dynmaicTitleGap >
    backupIntroTextPostion
  ) {
    $(".introtext").css({
      position: "fixed",
    });
  } else {
    $(".introtext").css({
      position: "initial",
      top: dynmaicTitleGap + "px",
      right: "0px",
      left: "0px",
    });
  }
};

const timer = () => {
  processDelay = 0;
  timerLength = globalText[timerIndex].length;
  window.setTimeout(() => {
    timer();
    for (let i of globalText[timerIndex]) {
      output(i);
    }
    processDelay += pauseBetweenWriteAndDelete + timerLength * 2;
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    for (let _i of globalText[timerIndex]) {
      pop();
    }
    if (timerIndex < globalText.length - 1) {
      timerIndex += 1;
    } else {
      //Kill all running Timeouts
      var killId: number = window.setTimeout(function () {
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

const output = (value: string) => {
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

export default class Title extends React.Component<{ language?: string }, {}> {
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
    let headLine;
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
        <div className="introtext">
          <FontAwesomeIcon
            icon={faRotateRight}
            className="refreshBtn"
            size="xl"
            pull="left"
            onClick={this.reset}
          />
          <p className="dynamic-title"></p>
        </div>
        <hr></hr>
      </>
    );
  }
}
