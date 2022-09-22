import $ from "jquery";
import React from "react";
import simpleParallax from "simple-parallax-js";
import background1 from "./media/img/background1.jpg";
import background2 from "./media/img/background2.jpg";
import ukflag from "./media/img/united-kingdom.png";
import gerflg from "./media/img/germany.png";
import Projects from "./projects";
import Title from "./titel";
import CV from "./cv";
import CaQ from "./certAndQual";
import DownloadArea from "./download";
import Footer from "./footer";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      welcomeHeadline: "",
    };
    this.setLanguage = this.setLanguage.bind(this);
  }

  componentDidMount() {
    if (sessionStorage.getItem("language") === "de") {
      this.setState({
        welcomeHeadline: "Willkommen",
      });
      $(".welcome-title").css({ fontSize: "16vw" });
      $(".active-deu").css({ border: "2px solid white" });
      $(".active-eng").css({ border: "" });
      $(".background-img").attr({ src: background2 });
    } else {
      this.setState({
        welcomeHeadline: "Welcome",
      });
      $(".welcome-title").css({ fontSize: "" });
      $(".active-eng").css({ border: "2px solid white" });
      $(".active-deu").css({ border: "" });
      $(".background-img").attr({ src: background1 });
    }

    var background = document.getElementsByClassName("background-img");
    new simpleParallax(background, {
      overflow: true,
      delay: 1,
      maxTransition: 65,
      customWrapper: ".backgroundcontainer",
    });

    var tranparentLayer = document.getElementsByClassName("trans");
    new simpleParallax(tranparentLayer, {
      overflow: true,
      delay: 1,
      maxTransition: 65,
      customWrapper: ".backgroundcontainer",
    });
  }

  setLanguage(event) {
    if (event.currentTarget.className.split(" ")[0] === "uk-button") {
      sessionStorage.setItem("language", "en");
      this.setState({
        welcomeHeadline: "Welcome",
      });
      $(".welcome-title").css({ fontSize: "" });
      $(".active-eng").css({ border: "2px solid white" });
      $(".active-deu").css({ border: "" });
      $(".background-img").attr({ src: background1 });
    } else if (event.currentTarget.className.split(" ")[0] === "ger-button") {
      sessionStorage.setItem("language", "de");
      this.setState({
        welcomeHeadline: "Willkommen",
      });
      $(".welcome-title").css({ fontSize: "16vw" });
      $(".active-deu").css({ border: "2px solid white" });
      $(".active-eng").css({ border: "" });
      $(".background-img").attr({ src: background2 });
    }
  }

  render() {
    return (
      <>
        <div className="language">
          <button className="uk-button lang-button" onClick={this.setLanguage}>
            <img className="active-eng hover-pointer" src={ukflag} alt="EN" />
          </button>
          <button className="ger-button lang-button" onClick={this.setLanguage}>
            <img className="active-deu hover-pointer" src={gerflg} alt="DE" />
          </button>
        </div>
        <header
          id="welcome-section"
          className="backgroundcontainer flex-container-row"
        >
          <div className="trans"></div>
          <img className="background-img" alt="BackgroundImg" />
          <h1 className="welcome-title">{this.state.welcomeHeadline}</h1>
        </header>
        <section id="animation">
          <div id="scroll-animation" className="scroll-sector-1"></div>
          <div id="scroll-animation" className="scroll-sector-2"></div>
          <div id="scroll-animation" className="scroll-sector-3"></div>
        </section>

        <main id="main">
          <Title />
          <hr></hr>
          <Projects />
          <hr></hr>
          <CV />
          <hr></hr>
          <CaQ />
          <hr></hr>
          <DownloadArea />
          <hr></hr>
          <Footer />
        </main>
      </>
    );
  }
}

export default Welcome;
