import React from "react";
import simpleParallax from "simple-parallax-js";
import background1 from "./media/img/background1.png";
import background2 from "./media/img/background2.png";
import ukflag from "./media/img/united-kingdom.png";
import gerflg from "./media/img/germany.png";
import { ActionCreator } from "@reduxjs/toolkit";

export default class Welcome extends React.Component<
  { language?: string; setLang: ActionCreator<string> },
  {}
> {
  constructor(props) {
    super(props);
    this.setLanguage = this.setLanguage.bind(this);
  }

  componentDidMount() {
    var background = document.getElementsByClassName("background-img");
    new simpleParallax(background, {
      overflow: true,
      delay: 1,
    });

    var transparentLayer = document.getElementsByClassName("transparentLayer");
    new simpleParallax(transparentLayer, {
      overflow: true,
      delay: 1,
    });
  }

  setLanguage(event) {
    console.log(event);
    if (event.target.alt === "en") {
      this.props.setLang("en");
      sessionStorage.setItem("language", "en");
    } else if (event.target.alt === "de") {
      this.props.setLang("de");
      sessionStorage.setItem("language", "de");
    }
  }

  setActiveButton = (
    buttonLanguage: string,
    currentSiteLanguage: string | undefined
  ) => {
    let src;
    let style;
    if (buttonLanguage === "de") {
      src = gerflg;
    } else {
      src = ukflag;
    }
    if (buttonLanguage === currentSiteLanguage) {
      style = { border: "2px solid white" };
    } else {
      style = { border: "initial" };
    }
    return (
      <img
        className={"active-" + buttonLanguage + " hover-pointer"}
        src={src}
        alt={buttonLanguage}
        // eslint-disable-next-line react/style-prop-object
        style={style}
      />
    );
  };

  render() {
    let backgroundImg;
    let welcomeTitle;
    let engButton;
    let gerButton;
    if (this.props.language === "de") {
      engButton = this.setActiveButton("en", this.props.language);
      gerButton = this.setActiveButton("de", this.props.language);
      backgroundImg = (
        <img className="background-img" alt="BackgroundImg" src={background2} />
      );
      welcomeTitle = (
        <h1 className="welcome-title" style={{ fontSize: "16vw" }}>
          Willkommen
        </h1>
      );
    } else {
      engButton = this.setActiveButton("en", this.props.language);
      gerButton = this.setActiveButton("de", this.props.language);
      backgroundImg = (
        <img className="background-img" alt="BackgroundImg" src={background1} />
      );
      welcomeTitle = (
        <h1 className="welcome-title" style={{ fontSize: "23vw" }}>
          Welcome
        </h1>
      );
    }

    return (
      <>
        <div className="language">
          <button className="lang-button" onClick={this.setLanguage}>
            {engButton}
          </button>
          <button className="lang-button" onClick={this.setLanguage}>
            {gerButton}
          </button>
        </div>
        <header
          id="welcome-section"
          className="backgroundcontainer flex-container-row"
        >
          <div className="transparentLayer"></div>
          {backgroundImg}
          {welcomeTitle}
        </header>
        <section id="animation">
          <div id="scroll-animation" className="scroll-sector-1"></div>
          <div id="scroll-animation" className="scroll-sector-2"></div>
          <div id="scroll-animation" className="scroll-sector-3"></div>
        </section>
      </>
    );
  }
}
