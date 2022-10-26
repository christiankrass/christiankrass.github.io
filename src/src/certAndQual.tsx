/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import JADS from "./media/img/JavaScript-Algorithms-and-Data-Structures.png";
import Responsive from "./media/img/Responsive-Design.png";
import FrontEnd from "./media/img/Front-End-Development-Libraries.png";
import SAP from "./media/img/SAP.jpeg";
import SWP2 from "./media/img/Softwarepro1.jpeg";
import SWP1 from "./media/img/Softwarepro2.jpeg";
import Intership from "./media/img/Praktikum.jpeg";

export default class CaQ extends React.Component<
  { language?: string }, //Type for Props
  {} // Type for States
> {
  carouselItemCreater(
    pictureImgSrc: string,
    title: string,
    urlToProject: string | null
  ) {
    const fluid: boolean = true;
    return (
      <Carousel.Item key={title}>
        <Image
          className="car-img"
          src={pictureImgSrc}
          alt={title}
          fluid={fluid}
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
    let headLine;
    if (this.props.language === "de") {
      headLine = (
        <h2 data-aos="zoom-in" className="c-and-q-title">
          Zertifikate
        </h2>
      );
    } else {
      headLine = (
        <h2 data-aos="zoom-in" className="c-and-q-title">
          Certificates
        </h2>
      );
    }

    let certification = [
      this.carouselItemCreater(
        FrontEnd,
        "Front End Certification",
        "https://www.freecodecamp.org/certification/christiankrass/front-end-development-libraries"
      ),
      this.carouselItemCreater(
        JADS,
        "Javascript algorithms and data structures Certification",
        "https://www.freecodecamp.org/certification/christiankrass/javascript-algorithms-and-data-structures"
      ),
      this.carouselItemCreater(
        Responsive,
        "Responsive web design Certification",
        "https://www.freecodecamp.org/certification/christiankrass/responsive-web-design"
      ),
      this.carouselItemCreater(SAP, "PROBAS SAP Workshop", null),
      this.carouselItemCreater(
        SWP1,
        "Softwareproject TU Ilmenau Presentationalsystem",
        null
      ),
      this.carouselItemCreater(
        SWP2,
        "Softwareproject School Application",
        null
      ),
      this.carouselItemCreater(Intership, "Intership Highschool", null),
    ];

    return (
      <>
        {headLine}
        <Carousel data-aos="slide-up" id="carousel" pause="hover">
          {certification.map((obj) => {
            return obj;
          })}
        </Carousel>
        <hr></hr>
      </>
    );
  }
}
