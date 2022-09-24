/* eslint-disable jsx-a11y/heading-has-content */
import $ from "jquery";
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

class Projects extends React.Component {
  componentDidMount() {
    if (this.props.language === "de") {
      $(".project-title").text("Projekte");
      $(".project-title-static").text("nur HTML + CSS");
      $(".project-title-interactive").text("SASS, React, jQuery");
      $(".btn-car").text("Weitere Informationen");
    } else {
      $(".project-title").text("Projects");
      $(".project-title-static").text("only HTML + CSS");
      $(".project-title-interactive").text("SASS, React, jQuery");
      $(".btn-car").text("Further information");
    }
  }

  componentDidUpdate() {
    if (this.props.language === "de") {
      $(".project-title").text("Projekte");
      $(".project-title-static").text("nur HTML + CSS");
      $(".project-title-interactive").text("SASS, React, jQuery");
      $(".btn-car").text("Weitere Informationen");
    } else {
      $(".project-title").text("Projects");
      $(".project-title-static").text("only HTML + CSS");
      $(".project-title-interactive").text("SASS, React, jQuery");
      $(".btn-car").text("Further information");
    }
  }

  render() {
    return (
      <>
        <div className="project-container">
          <h2 data-aos="fade-down" className="project-title"></h2>
          <h3 data-aos="zoom-in-right" className="project-title-static"></h3>
          <Carousel data-aos="zoom-in-left" id="carousel" pause="hover">
            <Carousel.Item>
              <Image
                className="1-Car-1-Pic car-img"
                src={tribute}
                alt="Tribute Page"
                fluid="true"
              />
              <Carousel.Caption>
                <Button
                  className="btn-car"
                  variant="secondary"
                  href="https://codepen.io/christiankrass/full/rNvWYjV"
                  target="_blank"
                  rel="noreferrer"
                  value="Tribute Page"
                ></Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="1-Car-2-Pic car-img"
                src={tech}
                alt="Technical Page"
                fluid="true"
              />
              <Carousel.Caption>
                <Button
                  className="btn-car"
                  variant="secondary"
                  href="https://codepen.io/christiankrass/full/mdLRJqP"
                  target="_blank"
                  rel="noreferrer"
                  alt="Technical Page"
                ></Button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="project-container">
          <h3 data-aos="slide-right" className="project-title-interactive"></h3>
          <Carousel data-aos="zoom-in-right" id="carousel" pause="hover">
            <Carousel.Item>
              <Image
                className="2-Car-1-Pic car-img"
                src={clock}
                alt="25+5 Clock"
              />
              <Carousel.Caption>
                <Button
                  className="btn-car"
                  variant="secondary"
                  href="https://codepen.io/christiankrass/full/dyeMLmo"
                  target="_blank"
                  rel="noreferrer"
                  value="25+5 Clock"
                ></Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="2-Car-2-Pic car-img"
                src={calc}
                alt="Calculator"
              />
              <Carousel.Caption>
                <Button
                  className="btn-car"
                  variant="secondary"
                  href="https://codepen.io/christiankrass/full/LYmGMaR"
                  target="_blank"
                  rel="noreferrer"
                  value="Calculator"
                ></Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="2-Car-3-Pic car-img"
                src={drums}
                alt="Drum Machine"
              />
              <Carousel.Caption>
                <Button
                  className="btn-car"
                  variant="secondary"
                  href="https://codepen.io/christiankrass/full/JjvGMbj"
                  target="_blank"
                  rel="noreferrer"
                  value="Drum Machine"
                ></Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="2-Car-4-Pic car-img"
                src={mdp}
                alt="Markdown Previewer"
              />
              <Carousel.Caption>
                <Button
                  className="btn-car"
                  variant="secondary"
                  href="https://codepen.io/christiankrass/full/jOxWyzL"
                  target="_blank"
                  rel="noreferrer"
                  value="Markdown Previewer"
                ></Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="2-Car-5-Pic car-img"
                src={quote}
                alt="Quote Machine"
              />
              <Carousel.Caption>
                <Button
                  className="btn-car"
                  variant="secondary"
                  href="https://codepen.io/christiankrass/full/oNdjpeY"
                  target="_blank"
                  rel="noreferrer"
                  value="Quote Machine"
                ></Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="2-Car-6-Pic car-img"
                src={sfwProject}
                alt="Softwareproject TU Ilmenau"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </>
    );
  }
}

export default Projects;
