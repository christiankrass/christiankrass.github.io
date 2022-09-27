import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import tribute from "./media/img/Tribute-Page.png";
import tech from "./media/img/Tech-Doc-Page.png";
import sfwProject from "./media/img/SoftwareproIMG1.png";
import clock from "./media/img/25+5Clock.png";
import calc from "./media/img/Calculator.png";
import drums from "./media/img/DrumMachine.png";
import mdp from "./media/img/MarkdownPreviewer.png";
import quote from "./media/img/QuoteMachine.png";

export default class Projects extends React.Component {
  carouselItemCreater(pictureImgSrc, title, urlToProject) {
    return (
      <Carousel.Item key={title}>
        <Image
          className="car-img"
          src={pictureImgSrc}
          alt={title}
          fluid="true"
        />
        {urlToProject !== null ? (
          <Carousel.Caption>
            <Button
              className="btn-car"
              variant="secondary"
              href={urlToProject}
              target="_blank"
              rel="noreferrer"
              value={title}
            >
              {this.props.language === "de"
                ? "Weitere Information"
                : "Further Information"}
            </Button>
          </Carousel.Caption>
        ) : (
          <></>
        )}
      </Carousel.Item>
    );
  }

  render() {
    let projectTitle = "";
    if (this.props.language === "de") {
      projectTitle = (
        <h2 data-aos="fade-down" className="project-title">
          Projekte
        </h2>
      );
    } else {
      projectTitle = (
        <h2 data-aos="fade-down" className="project-title">
          Projects
        </h2>
      );
    }

    let staticProjects = [
      this.carouselItemCreater(
        tribute,
        "Tribute Page",
        "https://codepen.io/christiankrass/full/rNvWYjV"
      ),
      this.carouselItemCreater(
        tech,
        "Technical Page",
        "https://codepen.io/christiankrass/full/mdLRJqP"
      ),
    ];

    let interactiveProjects = [
      this.carouselItemCreater(
        clock,
        "25+5 Clock",
        "https://codepen.io/christiankrass/full/dyeMLmo"
      ),
      this.carouselItemCreater(
        calc,
        "Calculator",
        "https://codepen.io/christiankrass/full/LYmGMaR"
      ),
      this.carouselItemCreater(
        drums,
        "Drum Machine",
        "https://codepen.io/christiankrass/full/JjvGMbj"
      ),
      this.carouselItemCreater(
        mdp,
        "Markdown Previewer",
        "https://codepen.io/christiankrass/full/jOxWyzL"
      ),
      this.carouselItemCreater(
        quote,
        "Quote Machine",
        "https://codepen.io/christiankrass/full/oNdjpeY"
      ),
      this.carouselItemCreater(sfwProject, "Softwareproject TU Ilmenau", null),
    ];

    return (
      <>
        <div className="project-container">
          {projectTitle}
          <h3 data-aos="zoom-in-right" className="project-title-static">
            HTML + CSS
          </h3>
          <Carousel data-aos="zoom-in-left" id="carousel" pause="hover">
            {staticProjects.map((obj) => {
              return obj;
            })}
          </Carousel>
        </div>
        <div className="project-container">
          <h3 data-aos="slide-right" className="project-title-interactive">
            SASS, React, jQuery
          </h3>
          <Carousel data-aos="zoom-in-right" id="carousel" pause="hover">
            {interactiveProjects.map((obj) => {
              return obj;
            })}
          </Carousel>
        </div>
        <hr></hr>
      </>
    );
  }
}
